import React from "react";
import scss from "./ClientTask.module.scss";
import spotify from "../../../assets/Clients/spotify.svg";
import slack from "../../../assets/Clients/slack.svg";
import netflix from "../../../assets/Clients/netflix.svg";
import heroku from "../../../assets/Clients/heroku.svg";
import vimeo from "../../../assets/Clients/vimeo.svg";
import airbnb from "../../../assets/Clients/airbnb.svg";
import { useTranslation } from "react-i18next";

function ClientTask() {
  const { t } = useTranslation();
  return (
    <div className={scss.client}>
      <div className="container">
        <div className={scss.clients}>
          <div className={scss.clientTop}>
            <h2>{t("clients.clients1")}</h2>
            <p>{t("clients.clients2")}</p>
          </div>
          <div className={scss.clientBottom}>
            <img src={spotify} alt="image" />
            <img src={slack} alt="image" />
            <img src={netflix} alt="image" />
            <img src={heroku} alt="image" />
            <img src={vimeo} alt="image" />
            <img src={airbnb} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientTask;
