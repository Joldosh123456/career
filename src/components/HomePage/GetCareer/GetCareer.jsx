import React from "react";
import scss from "./GetCareer.module.scss";
import {useTranslation} from 'react-i18next'

function GetCareer() {
  const {t} = useTranslation()
  return (
    <div className={scss.getCareerBG}>
      <div className="container">

        <div className={scss.getCareer}>
        <div className={scss.getLeft}>
          <div className={scss.leftTitle}>
            <h3>{t("get.get1")}</h3>
            <h3>{t("get.get2")}</h3>
            <h3>{t("get.get3")}</h3>
          </div>
        </div>
        <div className={scss.getRight}></div>
        </div>
      </div>
    </div>
  );
}

export default GetCareer;
