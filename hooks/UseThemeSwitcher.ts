import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
  const [mode, setMode] = useState<SetStateAction>("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return [mode, setTheme];
};