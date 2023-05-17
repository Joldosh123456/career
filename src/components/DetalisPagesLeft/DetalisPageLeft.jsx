import React from "react";
import css from "./DetalisPageLeft.module.scss";
import car from "../../assets/SmallCardDetalis/car.png";
import cash from "../../assets/SmallCardDetalis/cash.png";
import airplane from "../../assets/SmallCardDetalis/airport.png";
import group from "../../assets/SmallCardDetalis/traning.png";
import divaise from "../../assets/SmallCardDetalis/devices.png";
import personal from "../../assets/SmallCardDetalis/personal.png";
import { useTranslation } from "react-i18next";
import instagram from "../../assets/Detalispage/instagram.png";
import ins from "../../assets/Detalispage/in.png";
import twitter from "../../assets/Detalispage/twitter.png";
import facebook from "../../assets/Detalispage/OVERLAY COLOR.png";

function DetalisPageLeft() {
  const { t } = useTranslation();

  return (
    <div className={css.wrapper}>
      <div className={css.top}>
        <div className={css.text}>
          <h2>{t("deta.deta1")}</h2>
          <p>{t("deta.deta2")}</p>
        </div>
        <div className={css.text}>
          <h2>{t("deta.deta3")}</h2>
          <ul>
            <li>{t("deta.deta4")}</li>
            <li>{t("deta.deta5")}</li>
            <li>{t("deta.deta6")}</li>
            <li>{t("deta.deta7")}</li>
            <li>{t("deta.deta8")}</li>
            <li>{t("deta.deta9")}</li>
            <li>{t("deta.deta27")}</li>
          </ul>
        </div>
        <div className={css.text}>
          <h2>{t("deta.deta26")}</h2>
          <ul>
            <li>{t("deta.deta4")}</li>
            <li>{t("deta.deta5")}</li>
            <li>{t("deta.deta6")}</li>
            <li>{t("deta.deta7")}</li>
            <li>{t("deta.deta8")}</li>
            <li>{t("deta.deta9")}</li>
            <li>{t("deta.deta27")}</li>
          </ul>
        </div>
      </div>
      <div className={css.bottom}>
        <div className={css.bottom_text}>
          <div className={css.size}>
            <div>
              <h2>{t("deta.deta10")}</h2>
            </div>
            <div className={css.text_color}>
              <div>
                <p>{t("deta.deta11")}</p>
              </div>
              <div>
                <p>{t("deta.deta12")}</p>
              </div>
              <div>
                <p>{t("deta.deta13")}</p>
              </div>
              <div>
                <p>{t("deta.deta14")}</p>
              </div>
              <div>
                <p>{t("deta.deta15")}</p>
              </div>
              <div>
                <p>{t("deta.deta16")}</p>
              </div>
              <div>
                {" "}
                <p>{t("deta.deta17")}</p>
              </div>
            </div>
          </div>
          <div className={css.size}>
            <div>
              <h2>{t("deta.deta18")}</h2>
            </div>
            <div className={css.bottom_card}>
              <div>
                <img src={car} alt="" />
                <p>{t("deta.deta19")}</p>
              </div>
              <div>
                <img src={cash} alt="" />
                <p>{t("deta.deta20")}</p>
              </div>
              <div>
                <img src={airplane} alt="" />
                <p>{t("deta.deta21")}</p>
              </div>
              <div>
                <img src={group} alt="" />
                <p>{t("deta.deta22")}</p>
              </div>
              <div>
                <img src={divaise} alt="" />
                <p>{t("deta.deta23")}</p>
              </div>
              <div>
                <img src={personal} alt="" />
                <p>{t("deta.deta24")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.map}>
          <h2>{t("deta.deta25")}</h2>
          <iframe title="card" src="https://yandex.ru/maps/geo/moskva/53166393/?ll=37.685116%2C55.779982&z=14.16"></iframe>
        </div>
        <div className={css.share}>
          <h2>Share:</h2>
          <div className={css.share_card}>
            <div>
              <img src={facebook} alt="" />
              <p className={css.blue}>Facebook</p>
            </div>
            <div>
              <img src={instagram} alt="" />
              <p className={css.red}> Instagram</p>
            </div>
            <div>
              <img src={ins} alt="" />
              <p className={css.blue}>LinkedIn</p>
            </div>
            <div>
              <img src={twitter} alt="" />
              <p className={css.blues}>Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalisPageLeft;
