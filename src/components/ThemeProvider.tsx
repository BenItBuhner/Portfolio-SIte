"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeSource = "system" | "manual";
type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  source: ThemeSource;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Track whether the theme is coming from system preference or a manual user choice
  const [source, setSource] = useState<ThemeSource>(() => {
    if (typeof window !== "undefined") {
      const storedSource = localStorage.getItem("themeSource") as ThemeSource | null;
      return storedSource === "manual" ? "manual" : "system";
    }
    return "system";
  });

  // Initialize theme: manual override if present, otherwise system preference
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedSource = localStorage.getItem("themeSource") as ThemeSource | null;
    if (storedSource === "manual") {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
      }
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
  });

  // Keep theme in sync with system preference when in "system" mode
  useEffect(() => {
    if (source !== "system" || typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyPreference = (matches: boolean) => {
      setTheme(matches ? "dark" : "light");
    };

    applyPreference(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      applyPreference(event.matches);
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
    } else if (typeof (media as MediaQueryList).addListener === "function") {
      (media as MediaQueryList).addListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener);
      } else if (typeof (media as MediaQueryList).removeListener === "function") {
        (media as MediaQueryList).removeListener(listener);
      }
    };
  }, [source]);

  // Apply theme to document element and persist user choice
  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    if (typeof window === "undefined") return;

    if (source === "manual") {
      localStorage.setItem("theme", theme);
      localStorage.setItem("themeSource", "manual");
    } else {
      localStorage.removeItem("theme");
      localStorage.setItem("themeSource", "system");
    }
  }, [theme, source]);

  const setThemeMode = (mode: ThemeMode) => {
    if (mode === "system") {
      setSource("system");
      if (typeof window !== "undefined") {
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
      } else {
        setTheme("light");
      }
      return;
    }
    // manual selection
    setSource("manual");
    setTheme(mode);
  };

  const toggleTheme = () => {
    setThemeMode(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeMode, source }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
