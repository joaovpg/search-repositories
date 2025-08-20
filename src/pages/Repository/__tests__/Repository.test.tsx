import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import Repository from "../index";

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

  test("deve renderizar loader quando isLoading é true", () => {
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

  test("deve renderizar NotFound quando ocorre erro", () => {
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

  test("deve renderizar CardRepository e ReadmeNotFound quando markdown está vazio", () => {
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

  test("deve renderizar CardRepository e Markdown quando markdown está presente", () => {
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
