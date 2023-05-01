import { useLayoutEffect, useState } from "react";

const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || defaultTheme
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );
    localStorage.setItem("app-theme", theme);
    // document.documentElement.setAttribute("data-theme", theme ? moon : sun)
  }, [theme]);

  return { theme, setTheme };
};
