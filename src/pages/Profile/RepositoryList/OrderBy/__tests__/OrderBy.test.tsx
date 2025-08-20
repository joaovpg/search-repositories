import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, vi, expect, beforeEach } from "vitest";
import OrderBy from "..";

describe("<OrderBy />", () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test("deve renderizar com o label inicial", () => {
    render(
      <OrderBy
        label="Estrelas (maior para menor)"
        orderBy="estrelas-decrescente"
        onChangeOrderBy={mockOnChange}
      />
    );

    expect(
      screen.getByText(/Ordenar por: Estrelas \(maior para menor\)/)
    ).toBeInTheDocument();
  });

  test("deve mostrar todas as opções ao abrir o combobox e chama onChange ao selecionar", () => {
    render(
      <OrderBy
        label="Estrelas (maior para menor)"
        orderBy="estrelas-decrescente"
        onChangeOrderBy={mockOnChange}
      />
    );

    fireEvent.click(screen.getByText(/Ordenar por/));

    expect(
      screen.getByText("Última atualização (mais recente)")
    ).toBeInTheDocument();
    expect(screen.getByText("Estrelas (maior para menor)")).toBeInTheDocument();
    expect(screen.getByText("Estrelas (menor para maior)")).toBeInTheDocument();
    expect(screen.getByText("Nome (A → Z)")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Nome (A → Z)"));

    expect(mockOnChange).toHaveBeenCalledWith("nome");
  });
});
