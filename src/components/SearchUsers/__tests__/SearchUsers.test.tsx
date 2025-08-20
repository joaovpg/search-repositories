import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { beforeEach, expect, test, vi, describe } from "vitest";
import SearchUsers from "..";

const mockedUsedNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router"
  );

  return {
    ...actual,
    useNavigate: () => mockedUsedNavigate,
  };
});

describe("SearchUsers", () => {
  beforeEach(() => {
    mockedUsedNavigate.mockClear();
  });

  test("deve redicionar para /search?q=valor ao apertar Enter", () => {
    render(
      <MemoryRouter>
        <SearchUsers />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTitle("Pesquisar usuários"));

    const input = screen.getByPlaceholderText(
      "Digite o nome do usuário ou login"
    );

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/search?q=test");
  });

  test("deve redicionar para /search?q=valor ao apertar botão de pesquisa", () => {
    render(
      <MemoryRouter>
        <SearchUsers />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTitle("Pesquisar usuários"));

    const input = screen.getByPlaceholderText(
      "Digite o nome do usuário ou login"
    );

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(screen.getByTitle("Enviar pesquisa"));

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/search?q=test");
  });

  test("deve expandir o modal com o campo de texto em foco", async () => {
    render(
      <MemoryRouter>
        <SearchUsers />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTitle("Pesquisar usuários"));

    const input = screen.getByPlaceholderText(
      "Digite o nome do usuário ou login"
    );

    await waitFor(() => {
      expect(input).toHaveFocus();
    });
  });

  test("deve fechar o modal ao apertar Escape", async () => {
    render(
      <MemoryRouter>
        <SearchUsers />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTitle("Pesquisar usuários"));

    const input = screen.getByPlaceholderText(
      "Digite o nome do usuário ou login"
    );

    fireEvent.keyDown(input, { key: "Escape", code: "Escape" });

    expect(input).not.toBeInTheDocument();
  });
});
