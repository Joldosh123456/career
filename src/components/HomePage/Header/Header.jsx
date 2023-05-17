import React, { useCallback ,useEffect } from "react";
import scss from "./Header.module.scss";
import logo from "../../../assets/Header/logo.svg";
import vector from "../../../assets/Header/vector.svg";
import search from "../../../assets/Header/search.svg";
import lng from "../../../assets/Header/lng.svg";
import layer from "../../../assets/Header/layer.svg";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation();
  const [isActive, setActive] = useState(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 500) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const lngChange = i18n.language;
  const [inp, setInp] = useState(false);

  return (
    <div className={scss.header} style={{background : isActive ? "white" : ""}}>
      <div className={scss.headerLeft}>
        <img src={logo} alt="Logo Image" />
        <a href="/">{t("header.headerHome")}</a>
        <a href="/">Components</a>
        <div className={scss.page}>
          <p>
            Pages
            <img src={vector} alt="" />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/list">ListPage</a>
              </li>
              <li>
                <a href="/details">DetailsPage</a>
              </li>
              <li>
                <a href="/blog">BlogPage</a>
              </li>
              <li>
                <a href="/blog-details">BlogDetailsPage</a>
              </li>
              <li>
                <a href="/about">AboutPage</a>
              </li>
              <li>
                <a href="/contact">ContactPage</a>
              </li>
            </ul>
          </p>
        </div>

        <a href="/">Documentation</a>
      </div>
      <div className={scss.headerRight}>
        {inp && <input type="text" />}
        <img src={search} alt="search" onClick={() => setInp(!inp)} />
        <img
          src={lng}
          alt="language"
          onClick={() => changeLanguage(lngChange === "ru" ? "en" : "ru")}
        />
        {/* <img src={lng} alt="language" onClick={() => changeLanguage("en")} /> */}
        <ThemeSwitcher />
        <img src={layer} alt="layer" className={scss.layer} />
        <button>Login</button>
        <button>Join us</button>
      </div>
    </div>
  );
}

export default Header;
