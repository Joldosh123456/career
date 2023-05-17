import React from "react";
import scss from "./News.module.scss";
import ellipse from "../../../assets/News/ellipse.svg";
import vector from "../../../assets/News/vector.svg";
import { useState } from "react";
import { NewsConst } from "../../../constants/NewsConst";
import { useMemo } from "react";
import NewsCard from "./NewsCard/NewsCard";
import { useTranslation } from "react-i18next";

function News({ id, imgNews, dateNews1, dateNews2, tittleNews, descNews }) {
  const [img, setImg] = useState(NewsConst[4]);
  const handleChange = (src) => {
    setImg(src);
  };
  const { t } = useTranslation();

  const renderImg = useMemo(() =>
    NewsConst.map((item) => (
      <NewsCard key={item} src={item} handleChange={handleChange} />
    ))
  );

  return (
    <div className={scss.news}>
      <div className="container">
        <div className={scss.newsTitle}>
          <div className={scss.titleLeft}>
            <p>{t("news.news1")}</p>
            <h3>{t("news.news2")}</h3>
            <p>{t("news.news3")}</p>
          </div>

          <div className={scss.titleRigh}>
            <button>
              <p>{t("news.news4")}</p>
              <img src={vector} alt="image" />
            </button>
          </div>
        </div>

        <div className={scss.newsContent}>
          <div className={scss.contentLeft}>
            <div className={scss.leftImg}>
              <div className={scss.allData}>
                <div className={scss.date}>
                  <p>{img.dateNews1} </p>
                  <img src={ellipse} className={scss.ellipse} alt="image" />
                  <p>{img.dateNews2}</p>
                </div>
                <h2>{img.titleNews}</h2>
                <p>{img.descNews}</p>
              </div>
              <img src={img.imgNews} alt="news 5" />
            </div>
          </div>

          <div className={scss.contentRight}>{renderImg.slice(0, 4)}</div>
        </div>
      </div>
    </div>
  );
}

export default News;
