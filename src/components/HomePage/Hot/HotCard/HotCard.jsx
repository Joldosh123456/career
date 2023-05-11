import React from "react";
import scss from "./HotCard.module.scss";
import { useTranslation } from "react-i18next";

function HotCard({ catImg, catTitle, catJobs }) {
  const { t } = useTranslation();
  return (
    <div className={scss.hotCard}>
      <div className={scss.borderImg}>
        <img src={catImg} alt="" />
      </div>
      <h5>{t(catTitle)}</h5>
      <p>{t(catJobs)}</p>
    </div>
  );
}

export default HotCard;
