import React from "react";
import css from "./Small.module.scss";
import ikon from '../../assets/Small/ikon1.png'
import ikon1 from '../../assets/Small/ikon2.png'
import ikon2 from '../../assets/Small/ikon3.png'
import btn from '../../assets/Small/button.png'
import { useTranslation } from "react-i18next";

function Small() {
  const {t} = useTranslation()

  return (
    
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.test}>
        <div className={css.text}>
          <p>{t("small.small1")}</p>
          <h2>{t("small.small2")}</h2>
          <p>{t("small.small3")}</p>
        </div>
        <div className={css.wrapper_card}>
            <div className={css.card}>
                <img src={ikon} alt="" />
                <p>{t("small.small4")}</p>
                <h2>{t("small.small5")}</h2>
                <p>{t("small.small6")}</p>
            </div>
            <div className={css.card}>
                <img src={ikon1} alt="" />
                <p>{t("small.small7")}</p>
                <h2>{t("small.small8")}</h2>
                <p>{t("small.small6")}</p>
            </div>
            <div className={css.card}>
                <img src={ikon2} alt="" />
                <p>{t("small.small9")}</p>
                <h2>{t("small.small10")}</h2>
                <p>{t("small.small6")}</p>
            </div>
        </div>
        <div className={css.btn}>
            <button>
                <img src={btn} alt="" />
                <h2>{t("small.small11")}</h2>
            </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Small;
