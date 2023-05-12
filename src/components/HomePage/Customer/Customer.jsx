import React, { useRef } from "react";
import Slider from "react-slick";
import scss from "./Customer.module.scss";
import { useTranslation } from "react-i18next";
import rating from "../../../assets/Customer/rating.svg";
import prev from "../../../assets/Customer/prev.svg";
import next from "../../../assets/Customer/next.svg";

function Customer() {
  const { t } = useTranslation();
  const arrowRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={scss.customer}>
      <h2>{t("customer.customer1")}</h2>
      <Slider ref={arrowRef} {...settings}>
        <div className={scss.say}>
          <img src={rating} alt="" />
          <p>{t("customer.customer2")}</p>
          <h3>{t("customer.customer3")}</h3>
          <h5>{t("customer.customer4")}</h5>
        </div>

        <div className={scss.say}>
          <img src={rating} alt="" />
          <p>{t("customer.customer2")}</p>
          <h3>{t("customer.customer3")}</h3>
          <h5>{t("customer.customer4")}</h5>
        </div>
      </Slider>
      <div className={scss.button}>
        <img
          src={prev}
          alt="image"
          onClick={() => arrowRef.current.slickPrev()}
        />
        <img
          src={next}
          alt="image"
          onClick={() => arrowRef.current.slickNext()}
        />
      </div>
    </div>
  );
}

export default Customer;
