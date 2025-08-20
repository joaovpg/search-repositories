import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import ThemeSelector from "..";
import * as ThemeStore from "@/store/ThemeStore";
import type { PropsWithChildren } from "react";

vi.mock("../UI/Combobox", () => ({
  __esModule: true,
  default: ({
    children,
    onChange,
  }: PropsWithChildren<{ onChange(val: string): void }>) => (
    <div data-testid="combobox-mock">
      <div>{children}</div>
      <button onClick={() => onChange("light")}>Light</button>
      <button onClick={() => onChange("dark")}>Dark</button>
      <button onClick={() => onChange("theme")}>Auto</button>
    </div>
  ),
  Trigger: ({ children }: PropsWithChildren) => <div>{children}</div>,
  List: ({ children }: PropsWithChildren) => <div>{children}</div>,
  Option: ({ children }: PropsWithChildren) => <div>{children}</div>,
}));

vi.mock("@/assets/Icons/Light.svg?react", () => ({
  __esModule: true,
  default: () => <span data-testid="light-icon">LightIcon</span>,
}));

vi.mock("@/assets/Icons/Dark.svg?react", () => ({
  __esModule: true,
  default: () => <span data-testid="dark-icon">DarkIcon</span>,
}));

vi.mock("@/assets/Icons/Auto.svg?react", () => ({
  __esModule: true,
  default: () => <span data-testid="auto-icon">AutoIcon</span>,
}));

describe("ThemeSelector", () => {
  let setThemeMock: (theme: string) => void;

  beforeEach(() => {
    setThemeMock = vi.fn();
    vi.spyOn(ThemeStore, "useThemeStore").mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    });
  });

  test("Deve renderizar o componente ThemeSelector", () => {
    render(<ThemeSelector />);

    expect(screen.getByTitle("Selecionar tema")).toBeInTheDocument();
  });

  test("Deve aplicar a classe dark quando o tema for 'dark'", () => {
    vi.spyOn(ThemeStore, "useThemeStore").mockReturnValue({
      theme: "dark",
      setTheme: setThemeMock,
    });

    render(<ThemeSelector />);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  test("Deve aplicar a classe light quando o tema for 'light'", () => {
    vi.spyOn(ThemeStore, "useThemeStore").mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    });

    render(<ThemeSelector />);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
