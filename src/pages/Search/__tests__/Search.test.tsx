import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Search from "..";
import { MemoryRouter } from "react-router";

// mocks

const mockUseSearchParams = vi.fn();
vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useSearchParams: () => mockUseSearchParams(),
  };
});

vi.mock("@/graphql/search/hooks", () => {
  return {
    useSearchUsers: vi.fn(() => ({
      data: [{ id: "1", login: "joao" }],
      loading: false,
    })),
  };
});

import { useSearchUsers } from "@/graphql/search/hooks";

vi.mock("@/graphql/search/adapters", () => ({
  searchUsersAdapter: (data: any) => data,
}));

vi.mock("./CardUser", () => ({
  default: ({ login }: { login: string }) => (
    <div data-testid="card-user">{login}</div>
  ),
}));

vi.mock("@/graphql/search/state", () => ({
  queryVar: vi.fn(),
}));

vi.mock("@/components/FallbackLoader", () => ({
  default: () => <div>Loading...</div>,
}));

describe("Search", () => {
  beforeEach(() => {
    mockUseSearchParams.mockReset();
  });

  test("renderiza placeholder quando não há query", () => {
    mockUseSearchParams.mockReturnValue([
      {
        get: () => "",
      },
      vi.fn(),
    ]);

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    expect(screen.getByTestId("query-empty-test")).toBeInTheDocument();
  });

  test("renderiza lista de usuários quando há dados", () => {
    mockUseSearchParams.mockReturnValue([
      {
        get: () => "joao",
      },
      vi.fn(),
    ]);

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    expect(screen.getByText("joao")).toBeInTheDocument();
  });

  test("renderiza mensagem de nenhum usuário encontrado", () => {
    (useSearchUsers as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
      loading: false,
    });

    mockUseSearchParams.mockReturnValue([{ get: () => "joao" }, vi.fn()]);

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    expect(screen.getByText(/Nenhum usuário encontrado/i)).toBeInTheDocument();
  });

  test("renderiza loader quando loading", () => {
    mockUseSearchParams.mockReturnValue([
      {
        get: () => "joao",
      },
      vi.fn(),
    ]);

    (useSearchUsers as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      data: null,
      loading: true,
    });
    render(<Search />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
