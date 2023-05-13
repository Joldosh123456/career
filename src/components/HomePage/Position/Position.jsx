import React from "react";
import scss from "./Position.module.scss";
import rightImg from "../../../assets/Position/rightImg.svg";
import postBtn from "../../../assets/Position/postBtn.svg";
import {useTranslation} from 'react-i18next'
 
function Position() {
    const {t} = useTranslation()
  return (
    <div className={scss.position}>
      <div className="container">
        <div className={scss.post}>
          <div className={scss.positionLeft}>
            <p className={scss.orangeTxt}>{t("post.post1")}</p>
            <h4>{t("post.post2")}</h4>
            <p className={scss.postDesc}>{t("post.post3")}</p>
            <button>
                <img src={postBtn} alt="" />
                <p>{t("post.post4")}</p>
            </button>
          </div>
          <div className={scss.positionRight}>
            <img src={rightImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Position;
