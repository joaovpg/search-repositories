import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router";
import Profile from "..";
import { useGetRepositories, useGetUser } from "@/graphql/profile/hooks";
import { userVar } from "@/graphql/profile/state";

vi.mock("@/graphql/profile/state", () => ({
  userVar: vi.fn(),
}));

vi.mock("@/graphql/profile/hooks", () => ({
  useGetUser: vi.fn(() => ({
    data: {
      name: "João Victor",
      login: "joaovpg",
      bio: "Frontend dev",
      avatarUrl: "https://example.com/avatar.png",
      followersCount: 10,
      followingCount: 5,
    },
    loading: false,
    error: null,
  })),
  useGetRepositories: vi.fn(() => ({
    data: {
      user: {
        repositories: {
          nodes: [
            {
              id: "1",
              name: "Repo 1",
              description: "Descrição repo 1",
              url: "https://github.com/joaovpg/repo1",
              stargazerCount: 42,
              updatedAt: "2024-01-01T00:00:00Z",
              languages: { nodes: [{ name: "TypeScript" }] },
            },
          ],
        },
      },
    },
    loading: false,
    error: null,
  })),
}));

vi.mock("@/graphql/profile/hooks", () => ({
  useGetUser: vi.fn(),
}));

vi.mock("@/graphql/profile/state", () => ({
  userVar: vi.fn(),
}));

const mockUseGetUser = useGetUser as unknown as jest.Mock;

const mockUserVar = userVar as unknown as jest.Mock;

const mockUseGetRepositories = useGetRepositories as unknown as jest.Mock;

vi.mock("@/graphql/profile/hooks", () => ({
  useGetUser: vi.fn(),
  useGetRepositories: vi.fn(),
}));

describe("<Profile />", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("deve renderizar loader quando está carregando", () => {
    mockUseGetUser.mockReturnValue({ loading: true, data: null, error: null });

    render(
      <MemoryRouter initialEntries={["/profile/joao"]}>
        <Routes>
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId("fallback-loader")).toBeInTheDocument();
  });

  test("deve renderizar NotFound quando não há dados ou erro", () => {
    mockUseGetUser.mockReturnValue({ loading: false, data: null, error: true });

    render(
      <MemoryRouter initialEntries={["/profile/joao"]}>
        <Routes>
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId("not-found")).toBeInTheDocument();
  });

  test("deve renderizar ProfileCard e RepositoryList quando há dados", () => {
    mockUseGetUser.mockReturnValue({
      loading: false,
      data: {
        name: "João Victor",
        login: "joaovpg",
        bio: "Frontend dev",
        avatarUrl: "https://example.com/avatar.png",
        followersCount: 10,
        followingCount: 5,
      },
      error: false,
    });

    mockUseGetRepositories.mockReturnValue({
      loading: false,
      data: [
        {
          id: "1",
          name: "Repo 1",
          description: "Descrição repo 1",
          url: "",
          stargazerCount: 42,
          updatedAt: "2024-01-01T00:00:00Z",
          languages: { nodes: [{ name: "TypeScript" }] },
        },
      ],
      error: false,
    });

    render(
      <MemoryRouter initialEntries={["/profile/joaovpg"]}>
        <Routes>
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("João Victor")).toBeInTheDocument();
    expect(screen.getByText("Repo 1")).toBeInTheDocument();
  });

  test("deve chamar userVar quando username está presente", () => {
    mockUseGetUser.mockReturnValue({
      loading: false,
      error: null,
      data: {
        name: "João Victor",
        login: "joaovpg",
        bio: "Frontend dev",
        avatarUrl: "http://example.com/avatar.png",
        followersCount: 10,
        followingCount: 5,
      },
    });

    render(
      <MemoryRouter initialEntries={["/profile/joaovpg"]}>
        <Routes>
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    );

    expect(mockUserVar).toHaveBeenCalledWith("joaovpg");
  });
});
