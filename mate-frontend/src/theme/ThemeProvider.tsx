// theme-provider.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  defaultClassName: string;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  defaultClassName: "",
});

export function useTheme() {
  return useContext(ThemeContext);
}

type ThemeProviderProps = {
  children: ReactNode;
};

// Create a ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const defaultClassName =
    theme === "light" ? "bg-white text-black" : "bg-black text-white";

  const value = { theme, setTheme, defaultClassName };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
