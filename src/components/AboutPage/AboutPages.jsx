import React from "react";
import css from "./AboutPage.module.scss";
import cards from "../../assets/About/fons.png";
import image1 from "../../assets/About/image1.png";

function AboutPage() {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.item_center}>
          <div className={css.card}>
            <div>
              <h2>We Make The Best For All Our Customers.</h2>
            </div>
            <div>
              <p>
                Curabitur ullamcorper ultricies nisi. Sed mollis, eros et
                ultrices tempus, mauris ipsum aliquam libero, non adipiscing
                dolor urna a orci.
              </p>
            </div>
            <div>
              <p>
                Donec vitae sapien ut libero venenatis faucibus. Vestibulum
                fringilla pede sit amet augue. Vivamus euismod mauris.
              </p>
            </div>
          </div>
          <div className={css.fons}>
            <img src={cards} alt="" />
          </div>
        </div>
        <div className={css.card}>
          <div>
            <h2>Fusce convallis metus id felis luctus</h2>
            <p>
              Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet
              imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo
              pellentesque facilisis.
            </p>
          </div>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <h2>Fusce convallis metus id felis luctus</h2>
            <p>
              Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet
              imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo
              pellentesque facilisis.
            </p>
          </div>
        </div>
        <div className={css.end}>
          <div>
            <h2>Our Team</h2>
            <p>
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
              sapien, quis venenatis ante odio sit amet eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
