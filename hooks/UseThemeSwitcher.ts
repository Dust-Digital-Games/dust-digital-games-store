import { useTheme } from "next-themes";
import { useEffect, useState, SetStateAction } from "react";

export const useThemeSwitcher = () => {
  const [mode, setMode] = useState<SetStateAction<string | undefined>>("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return [mode, setTheme];
};
