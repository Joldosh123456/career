import React from "react";
import scss from "./GetCareer.module.scss";
import { useTranslation } from "react-i18next";
import getRightImg from "../../../assets/GetCareer/getRightImg.svg";
import searchIcon from "../../../assets/GetCareer/searchIcon.svg";
import location from "../../../assets/GetCareer/location.svg";
import search from "../../../assets/GetCareer/search.svg";
import spotify from "../../../assets/GetCareer/spotify.svg";
import slack from "../../../assets/GetCareer/slack.svg";
import netflix from "../../../assets/GetCareer/netflix.svg";
import lenovo from "../../../assets/GetCareer/lenovo.svg";

function GetCareer() {
  const { t } = useTranslation();
  return (
    <div className={scss.getCareerBG}>
      <div className="container">
        <div className={scss.getCareer}>
          <div className={scss.getLeft}>
            <div className={scss.leftTitle}>
              <div className={scss.subtitle}>
                <h3>
                  {t("get.get1")}
                  <h3 className={scss.careerH}>{t("get.get2")}</h3>
                </h3>

                {/* <h3 className={scss.careerH}>{t("get.get2")}</h3> */}
              </div>

              <h3>{t("get.get3")}</h3>
              <p>{t("get.get4")}</p>
            </div>
            <div className={scss.searvhBlock}>
              <div className={scss.searchInput}>
                <img src={searchIcon} alt="search" />
                <input type="text" placeholder={t("get.get5")} />
              </div>

              <div className={scss.locationInput}>
                <img src={location} alt="location" />
                <input type="text" placeholder={t("get.get6")} />
              </div>

              <button>
                <img src={search} alt="search" />
                <p>{t("get.get11")}</p>
              </button>
            </div>
            <div className={scss.socialBlock}>
              <div>
                <img src={spotify} alt="image" />
                <img src={slack} alt="image" />
              </div>
              <div>
                <img src={netflix} alt="image" />
                <img src={lenovo} alt="image" />
              </div>
            </div>
            <div className={scss.ratingBlock}>
              <div className={scss.rating}>
                <h3>2m+</h3>
                <p>{t("get.get7")}</p>
              </div>

              <div className={scss.rating}>
                <h3>500k+</h3>
                <p>{t("get.get8")}</p>
              </div>

              <div className={scss.rating}>
                <h3>250k+</h3>
                <p>{t("get.get9")}</p>
              </div>

              <div className={scss.rating}>
                <h3>1,56k+</h3>
                <p>{t("get.get10")}</p>
              </div>
            </div>
          </div>
          <div className={scss.getRight}>
            <img src={getRightImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCareer;
