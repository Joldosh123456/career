import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";



const ThemeSwitcher = ({change}) => {
  const [isDark, setDark] = useState(localStorage.getItem("app"));
  const ThemeIcon = isDark ? NightsStayIcon : WbSunnyIcon;
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);
  
  const click = () => {
    setDark(!isDark)
    change()
  }


  return (
    <div className={styles.switcher} onClick={click}>
      <ThemeIcon  className={styles.icon}></ThemeIcon>
    </div>
  );
};

export default ThemeSwitcher;
