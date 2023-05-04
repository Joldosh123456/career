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
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={scss.topCompanies}>
      {/* <div className="container"> */}
      <h2>{t("top.top1")}</h2>
      <div className={scss.top}>
        <button>=====</button>

        <Slider ref={arrowRef} {...settings}>
          <div className={scss.allComp}>
            {TopCompConst.map((item) => (
              <TopCompaniesCard key={item.id} {...item} />
            ))}
          </div>

          <div className={scss.allComp}>
            {TopCompConst.map((item) => (
              <TopCompaniesCard key={item.id} {...item} />
            ))}
          </div>

          {/* <div>
            <h2>Hello</h2>
          </div>

          <div>
            <h2>Hello</h2>
          </div>

          <div>
            <h2>Hello</h2>
          </div> */}
        </Slider>
        <button>=====</button>
      </div>
      {/* </div> */}
    </div>
  );
}

export default TopCompanies;
