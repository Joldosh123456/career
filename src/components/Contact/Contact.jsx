import React from "react";
import css from "./Contact.module.scss";
import ink from "./in.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import Footer from "../HomePage/Footer/Footer";
import Header from "../HomePage/Header/Header";
import { useTranslation } from "react-i18next";

function Contact() {
  const {t} = useTranslation()
  
  return (
    <div className={css.wrapper}>
          <div>
            <Header/>
          </div>

      <div className={css.main}>
        <div className="container">
        <div className={css.h1_text}>
          <h1>{t("contact.contact1")}</h1>
          <p>{t("contact.contact2")}</p>
        </div>
        <div className={css.card_card}>
          <div className={css.card}>
            <h2>{t("contact.contact3")}</h2>
            <p>debbie.baker@example.com</p>
          </div>
          <div className={css.card}>
            <h2>{t("contact.contact4")}</h2>
            <p>(907) 555-0101</p>
          </div>
          <div className={css.card}>
            <h2>{t("contact.contact5")}</h2>
            <p>{t("contact.contact7")}</p>
          </div>
          <div className={css.card}>
            <h2>{t("contact.contact6")}</h2>
            <div className={css.card_right_ikon}>
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={ink} alt="in" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
        </div>
        <div className={css.main_end}>
          <div className={css.main_end_center}>
            <h1>{t("contact.contact9")}</h1>
            <p>{t("contact.contact10")}</p>
          </div>
          <div className={css.map}> 
          <iframe src="https://yandex.ru/maps/geo/moskva/53166393/?ll=37.685116%2C55.779982&z=14.16" width="500px" height="500px" >

</iframe>
          </div>
          <input id={css.main_end_input} type="text" placeholder={t("contact.contact11")} />
          <input id={css.main_end_input} type="text" placeholder={t("contact.contact12")} />
          <input id={css.main_end_input} type="text" placeholder={t("contact.contact13")} />
          <input id={css.main_end_biginput} type="text"  placeholder={t("contact.contact14")}/>
          <button>{t("contact.contact15")}</button>
        </div>
      </div>
      <div>
          <Footer/>
        </div>
    </div>
  );
}

export default Contact;
