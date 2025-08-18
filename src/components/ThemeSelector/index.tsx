import { useLayoutEffect, type ReactNode } from "react";
import Combobox from "../UI/Combobox";
import { useThemeStore, type Theme } from "@/store/ThemeStore";

//icons
import LightIcon from "@/assets/Icons/Light.svg?react";
import DarkIcon from "@/assets/Icons/Dark.svg?react";
import AutoIcon from "@/assets/Icons/Auto.svg?react";

const Icon: Record<Theme, ReactNode> = {
  light: <LightIcon className="text-text" />,
  dark: <DarkIcon className="text-text" />,
  theme: <AutoIcon />,
};

const themeOptions: { label: string; value: Theme }[] = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Auto", value: "theme" },
];

function ThemeSelector() {
  const { setTheme, theme } = useThemeStore();

  useLayoutEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" ||
        (theme === "theme" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);

  return (
    <Combobox onChange={(value) => setTheme(value as Theme)} value={theme}>
      <Combobox.Trigger>{Icon[theme]}</Combobox.Trigger>

      <Combobox.List>
        {themeOptions.map(({ label, value }) => (
          <Combobox.Option key={value} value={value}>
            {Icon[value]} {label}
          </Combobox.Option>
        ))}
      </Combobox.List>
    </Combobox>
  );
}

export default ThemeSelector;
