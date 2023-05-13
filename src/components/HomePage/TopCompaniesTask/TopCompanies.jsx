import React, { useRef } from "react";
import scss from "./TopCompanies.module.scss";
import { useTranslation } from "react-i18next";
import { TopCompConst } from "../../../constants/TopCompConst";
import TopCompaniesCard from "./TopCompaniesCard/TopCompaniesCard";
import Slider from "react-slick";

function TopCompanies() {
  const { t } = useTranslation();
  const arrowRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={scss.topCompanies}>
      <h2>{t("top.top1")}</h2>
      <div className={scss.top}>
        <Slider ref={arrowRef} {...settings}>
          {TopCompConst.map((item) => (
            <div className={scss.allComp}>
              <TopCompaniesCard key={item.id} {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopCompanies;
