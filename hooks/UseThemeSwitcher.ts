import { useTheme } from "next-themes";
import { useEffect, useState, SetStateAction } from "react";

export const useThemeSwitcher = () => {
  // TODO: this 'any' type is ඞ (not good)
  const [mode, setMode] = useState<SetStateAction<any>>("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return [mode, setTheme];
};
