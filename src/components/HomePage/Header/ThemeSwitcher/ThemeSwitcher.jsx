import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(localStorage.getItem("app"));
  const ThemeIcon = isDark ? NightsStayIcon : WbSunnyIcon;
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);
  console.log(isDark);
  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <ThemeIcon className={styles.icon}></ThemeIcon>
    </div>
  );
};

export default ThemeSwitcher;
