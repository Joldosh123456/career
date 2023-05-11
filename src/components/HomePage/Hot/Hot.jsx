import React from "react";
import scss from "./Hot.module.scss";
// import cat1black from "../../../assets/Hot/cat1.svg";
import viewall from "../../../assets/Hot/viewall.svg";
import { HotConst } from "../../../constants/HotConst";
import HotCard from "./HotCard/HotCard";
import { useTranslation } from "react-i18next";

function Hot() {
  const { t } = useTranslation()

  return (
    <div className={scss.hot}>
      <div className="container">
        <div className={scss.categories}>
          <h2>{t("hot.hot10")}</h2>
          <div className={scss.allcategories}>
            {HotConst.map((item) => (
              <HotCard key={item} {...item} />
            ))}
          </div>
          <div className={scss.viewAll}>
                <h5>{t("hot.hot11")}</h5>
                <img src={viewall} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hot;
