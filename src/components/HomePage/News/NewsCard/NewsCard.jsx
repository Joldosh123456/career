import React from "react";
import scss from "./NewsCard.module.scss";
import ellipse from "../../../../assets/News/ellipse.svg";

function NewsCard({
  src,
  handleChange,
  id,
  imgNews,
  dateNews1,
  dateNews2,
  titleNews,
  descNews,
}) {
  return (
    <div>
      <div className={scss.newsContent} onClick={() => handleChange(src)}>
        <div className={scss.top}>
          <img src={src.imgNews} alt="image" />
        </div>
        <div className={scss.bottom}>
          <div className={scss.date}>
            <p>{src.dateNews1} </p>
            <img src={ellipse} className={scss.ellipse} alt="image" />
            <p>{src.dateNews2}</p>
          </div>
          <h2>{src.titleNews}</h2>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
