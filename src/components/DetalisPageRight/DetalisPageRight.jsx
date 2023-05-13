import React from "react";
import css from "./DetalisPageRight.module.scss";
import DetalisSlider from "../DetalisSlider/DetalisSlider";
import { SmallCard } from "../../constants/Smalcard";
import slide from "../../assets/Mapslide/slide9.png";
import { useTranslation } from "react-i18next";

function DetalisPageRight() {
  const {t} = useTranslation()
  return (
    <div className={css.wrapper}>
      <div className={css.gaps}>
        <div className={css.shadow}>
          {SmallCard.map((el) => (
            <DetalisSlider key={el.id} {...el} />
          ))}
        </div>
        <div className={css.card}>
          <div className={css.image}>
            <img src={slide} alt="" />
          </div>
          <div className={css.text}>
            <div>
              <h2>{t("slider.slide13")}</h2>
            </div>
            <div>
              <p>{t("slider.slide14")}</p>
            </div>
          </div>
        </div>
        <div className={css.bottom}>
          <div>
            <h2 id={css.color}>{t("slider.slide15")}</h2>
          </div>
          <div className={css.bottom_text}>
            <h2>{t("slider.slide15")}</h2>
            <p>{t("slider.slide17")}</p>
            <h2>{t("slider.slide18")}</h2>
            <p>{t("slider.slide17")}</p>
            <h2>{t("slider.slide19")}</h2>
            <p>{t("slider.slide17")}</p>
          </div>
        </div>
        <div className={css.image_end}>
          <label>
            <h2>{t("slider.slide20")}</h2>
            <p>{t("slider.slide21")}</p>
            <button>{t("slider.slide22")}</button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default DetalisPageRight;
