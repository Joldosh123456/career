import React, { useRef } from "react";
import scss from "./GlobalTask.module.scss";
import { useTranslation } from "react-i18next";
import browse from "../../../assets/GlobalTask/browse.svg";
import city1 from "../../../assets/GlobalTask/city1.svg";
import Slider from "react-slick";
import { GlobalConst } from "../../../constants/GlobalConst";
import GlobalTaskCard from "./GlobalTaskCard/GlobalTaskCard";
import next from "../../../assets/GlobalTask/next.svg";
import prev from "../../../assets/GlobalTask/prev.svg";

function GlobalTask() {
  const { t } = useTranslation();
  const arrowRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className={scss.globalTask}>
      <div className={scss.global}>
        <div className={scss.globalTitle}>
          <h3>{t("global.global1")}</h3>
          <p>{t("global.global2")}</p>
          <button>
            {t("global.global3")} <img src={browse} alt="" />
          </button>
        </div>
        

        <div className={scss.globalImg}>
          <Slider ref={arrowRef} {...settings}>
            {GlobalConst.map((item) => (
              <GlobalTaskCard key={item.id} {...item} />
            ))}
          </Slider>
          <div className={scss.buttons}>
            <div className={scss.slideBtn} onClick={() => arrowRef.current.slickPrev()} >
              <img src={prev} alt="" />
            </div>
            <div className={scss.slideBtn} onClick={() => arrowRef.current.slickNext()} >
              <img src={next} alt="" />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default GlobalTask;
