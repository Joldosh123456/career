import React from "react";
import css from "./Contact.module.scss";
import ink from "./in.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";

function Contact() {
  return (
    <div className={css.wrapper}>
      <div className={css.main}>
        <div className={css.h1_text}>
          <h1>Get In Touch</h1>
          <p>We'd love to talk about how we can help you.</p>
        </div>
        <div className={css.card_card}>
          <div className={css.card}>
            <h2>Email</h2>
            <p>debbie.baker@example.com</p>
          </div>
          <div className={css.card}>
            <h2>Phone</h2>
            <p>(907) 555-0101</p>
          </div>
          <div className={css.card}>
            <h2>Address</h2>
            <p>3891 Ranchview Dr. Richardson, California 62639</p>
          </div>
          <div className={css.card}>
            <h2>Follow Us</h2>
            <div className={css.card_right_ikon}>
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={ink} alt="in" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
        <div className={css.main_end}>
          <div>
            <h1>Drop us a line</h1>
            <p>We normally respond within 2 business days</p>
          </div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <input id={css.main_end_biginput} type="text"  placeholder="Message"/>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
