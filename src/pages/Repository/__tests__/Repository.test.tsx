// Repository.test.tsx
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import Repository from "../index";

// cria mock do hook
vi.mock("../useFetchRepositoryData", () => ({
  useFetchRepositoryData: vi.fn(),
}));

import { useFetchRepositoryData } from "../useFetchRepositoryData";
import { MemoryRouter } from "react-router";
const mockUseFetchRepositoryData =
  useFetchRepositoryData as unknown as jest.Mock;

describe("<Repository />", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("renderiza loader quando isLoading é true", () => {
    mockUseFetchRepositoryData.mockReturnValue({
      isLoading: true,
      isError: false,
      markdown: "",
      repository: null,
      repositoryLanguages: [],
    });

    render(
      <MemoryRouter>
        <Repository />
      </MemoryRouter>
    );

    expect(screen.getByTestId("fallback-loader")).toBeInTheDocument();
  });

  test("renderiza NotFound quando ocorre erro", () => {
    mockUseFetchRepositoryData.mockReturnValue({
      isLoading: false,
      isError: true,
      markdown: "",
      repository: null,
      repositoryLanguages: [],
    });

    render(
      <MemoryRouter>
        <Repository />
      </MemoryRouter>
    );

    expect(screen.getByTestId("not-found")).toBeInTheDocument();
  });

  test("renderiza CardRepository e ReadmeNotFound quando markdown está vazio", () => {
    mockUseFetchRepositoryData.mockReturnValue({
      isLoading: false,
      isError: false,
      markdown: "",
      repository: {
        description: "Um repo de teste",
        name: "repo-teste",
        html_url: "https://github.com/test/repo",
        stargazers_count: 42,
        updated_at: "2023-08-20T00:00:00Z",
      },
      repositoryLanguages: ["TypeScript", "React"],
    });

    render(
      <MemoryRouter>
        <Repository />
      </MemoryRouter>
    );

    expect(screen.getByText("repo-teste")).toBeInTheDocument();
    expect(screen.getByText(/readme não encontrado/i)).toBeInTheDocument();
  });

  test("renderiza CardRepository e Markdown quando markdown está presente", () => {
    mockUseFetchRepositoryData.mockReturnValue({
      isLoading: false,
      isError: false,
      markdown: "# Título do README",
      repository: {
        description: "Outro repo",
        name: "meu-repo",
        html_url: "https://github.com/test/meu-repo",
        stargazers_count: 10,
        updated_at: "2023-08-20T00:00:00Z",
      },
      repositoryLanguages: ["JavaScript"],
    });

    render(
      <MemoryRouter>
        <Repository />
      </MemoryRouter>
    );

    expect(screen.getByText("meu-repo")).toBeInTheDocument();
    expect(screen.getByText("Título do README")).toBeInTheDocument();
  });
});
