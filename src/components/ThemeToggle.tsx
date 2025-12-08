"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

type Mode = "light" | "dark" | "system";

export default function ThemeToggle() {
  const { theme, source, setThemeMode } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const activeMode: Mode = isClient ? (source === "system" ? "system" : theme) : "system";

  const cycleMode = () => {
    const next: Mode = activeMode === "light" ? "dark" : activeMode === "dark" ? "system" : "light";
    setThemeMode(next);
  };

  const icon = (() => {
    if (activeMode === "light") {
      return (
        // Sun
        <>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </>
      );
    }
    if (activeMode === "dark") {
      return (
        // Moon
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      );
    }
    return (
      // Device
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
        <path d="M8 20h8" />
      </>
    );
  })();

  const label =
    activeMode === "light"
      ? "Switch to dark theme"
      : activeMode === "dark"
      ? "Match device theme"
      : "Switch to light theme";

  return (
    <button
      onClick={cycleMode}
      className="theme-toggle-btn"
      aria-label={label}
      aria-pressed={activeMode === "dark"}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="theme-icon"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icon}
      </svg>
    </button>
  );
}
