import React from "react";
import css from "./BlockPageRight.module.scss";
import image1 from "../../../assets/Block/image1.png";
import image2 from "../../../assets/Block/image2.png";
import image3 from "../../../assets/Block/image3.png";
import image4 from "../../../assets/Block/image4.png";
import fons from '../../../assets/Block/fons.png'



function BlockPageRight() {
  return (
    <div className={css.wrapper}>
      <div className={css.inputs}>
        <input
          type="text"
          className={css.image_input}
          placeholder="Search..." 
        />
      </div>
      <div className={css.text}>
        <div>
          <h2>Categories</h2>
          <ul>
            <li>
              <span>Marketing</span>
            </li>
            <li>
              <span>Community</span>
            </li>
            <li>
              <span>Tutorials</span>
            </li>
            <li>
              <span>Business</span>
            </li>
            <li>
              <span>Management</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.card}>
        <h2>Recent Posts</h2>
        <div className={css.cards}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div className={css.text_p}>
            <p>Understanding color theory: the color wheel and finding...</p>
            <p className={css.color_p}>November 7, 2017 8 min read</p>
          </div>
        </div>
        <div className={css.cards}>
          <div>
            <img src={image2} alt="" />
          </div>
          <div className={css.text_p}>
            <p>How to design a product that can grow itself 10x in year</p>
            <p className={css.color_p}>October 24, 2018 8 min read</p>
          </div>
        </div>
        <div className={css.cards}>
          <div>
            <img src={image3} alt="" />
          </div>
          <div className={css.text_p}>
            <p>Any mechanical keyboard enthusiasts in design?</p>
            <p className={css.color_p}>November 28, 2015 8 min read</p>
          </div>
        </div>
        <div className={css.cards}>
          <div>
            <img src={image4} alt="" />
          </div>
          <div className={css.text_p}>
            <p>
              Yo Reddit! What’s a small thing that anyone can do at nearly...
            </p>
            <p className={css.color_p}>May 29, 2017 8 min read</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Popular Tags</h2>
        <div className={css.text_color}>
          <p>Marketing</p>
          <p>Development</p>
          <p>Banking</p>
          <p>HR & Recruting</p>
          <p>Design</p>
          <p>Management</p>
          <p>Business</p>
          <p>Community</p>
          <p>Tutorials</p>
        </div>
      </div>
      <div className={css.fonss}>
        <img src={fons} alt="" />
      </div>
    </div>
  );
}

export default BlockPageRight;
