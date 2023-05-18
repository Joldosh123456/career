import React from "react";
import scss from "./LeftCard.module.scss";
import ellips from "../../../../assets/Left/ellipse.svg";

function LeftCard({
  id,
  newsImage,
  news_date1,
  news_date2,
  news_title,
  news_desc,
  news_user,
  news_ava
}) {
  return (
    <div className={scss.card_data}>
      <div className={scss.newsImage}>
        <img src={newsImage} alt="" />
      </div>
      <div className={scss.news_date}>
        <p>{news_date1}</p>
        <img src={ellips} alt="" />
        <p>{news_date2}</p>
      </div>
      <h5>{news_title}</h5>
      <p>{news_desc}</p>
      <div className={scss.user}>
            <img src={news_ava} alt="" />
            <p>{news_user}</p>
      </div>
    </div>
  );
}

export default LeftCard;
