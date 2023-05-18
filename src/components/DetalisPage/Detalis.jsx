import React from "react";
import css from "./Detalis.module.scss";
import DetalisPageLeft from "../DetalisPagesLeft/DetalisPageLeft";
import DetalisPageRight from "../DetalisPageRight/DetalisPageRight";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import { useTranslation } from "react-i18next";
import { MapSlider } from "../../constants/MapSlider";
import Mapslide from "../Mapslide/Mapslide";
import allOrange from "../../assets/All/allOrange.svg";

function Detalis() {
  const { t } = useTranslation();
  const maps = MapSlider.map((item) => <Mapslide key={item.id} {...item} />);
  return (
    <div className={css.wrapper}>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className={css.all_tegs}>
          <div className={css.left}>
            <DetalisPageLeft />
          </div>
          <div className={css.right}>
            <DetalisPageRight />
          </div>
        </div>
        <div className={css.mappers}>
          <div className={css.mapperTitle}>
            <h2>{t("mapper.mapper1")}</h2>
            <a href="/list">
              <div>
                <p>{t("mapper.mapper2")}</p>
                <img src={allOrange} alt="image" />
              </div>
            </a>
          </div>
          <div className={css.mapper}>{maps.slice(0, 3)}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detalis;
