"use client";

import { Theme } from "@radix-ui/themes";
import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext<{
  isDark: boolean,
  setIsDark: ((x: boolean) => void) | null
}>({
    isDark:true,
    setIsDark:null
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Theme appearance={isDark ? "dark" : "light"}>{children}</Theme>
    </ThemeContext.Provider>
  );
}
