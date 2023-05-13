import React from "react";
import scss from "./DownloadApp.module.scss";
import apple from "../../../assets/DownloadApp/apple.svg";
import app from "../../../assets/DownloadApp/app.svg";
import googleplay from "../../../assets/DownloadApp/googleplay.svg";
import { useTranslation } from "react-i18next";

function DownloadApp() {
  const { t } = useTranslation();
  return (
    <div className={scss.download}>
      <div className="container">
        <div className={scss.app}>
          <div className={scss.appLeft}>
            <h2>{t("download.download1")}</h2>
            <p className={scss.appDesc}>{t("download.download2")}</p>
            <div className={scss.buttons}>
              <div className={scss.button}>
                <div className={scss.buttonLeft}>
                  <img src={apple} alt="image" />
                </div>
                <div className={scss.buttonRight}>
                  <p>{t("download.download3")}</p>
                  <h5>Apple Store</h5>
                </div>
              </div>
              <div className={scss.button}>
                <div className={scss.buttonLeft}>
                  <img src={googleplay} alt="image" />
                </div>
                <div className={scss.buttonRight}>
                  <p>{t("download.download3")}</p>
                  <h5>Google Play</h5>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.appRight}>
            <img src={app} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
