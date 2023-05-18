import React from "react";
import scss from "./Featured.module.scss";
import { useTranslation } from "react-i18next";
import { MapSlider } from "../../constants/MapSlider";
import Mapslide from "../Mapslide/Mapslide";
import all from '../../assets/All/all.svg'

function Featured() {
  const { t } = useTranslation();
  const homeMap = 
    MapSlider.map((item) => (
        <Mapslide key={item.id} {...item} />
        ))
   

  return (
    <div className={scss.featured}>
      <div className="container">
        <div className={scss.featuredTitle}>
          <div className={scss.featLeft}>
            <p>{t("feat.feat1")}</p>
          </div>
          <div className={scss.featRight}>
            <h2>{t("feat.feat2")}</h2>
          </div>
        </div>
        <div className={scss.featMap}>
            <div className={scss.grid}>
          {homeMap.slice(0,6)}
              </div>
        </div>
        <button>
            <a href="/list">{t("feat.feat3")}</a>
            <img src={all} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Featured;
