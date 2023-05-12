import React from "react";
import scss from "./GlobalTaskCard.module.scss";
import {useTranslation} from 'react-i18next'

function GlobalTaskCard({ id, cityImg, cityName, cityJobs }) {
    const {t} = useTranslation()
  return (
    <div className={scss.globalCard}>
      <img src={t(cityImg)} alt="" />
      <h5>{t(cityName)}</h5>
      <p>{t(cityJobs)}</p>
    </div>
  );
}

export default GlobalTaskCard;
