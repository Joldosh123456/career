import React from "react";
import css from "./ListPages.module.scss";
import Header from "../HomePage/Header/Header";
import { MapSlider } from "../../constants/MapSlider";
import Mapslide from "../Mapslide/Mapslide";
import Footer from "../HomePage/Footer/Footer";
import search from "../../components/ListPage/search.png";
import Slider from "react-slick";

function ListPages() {
  // const maprender = MapSlider.map((el) => <Mapslide key={el.id} {...el} />);

  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    arrows: false,
    slidesToShow: 12,
    slidesToScroll: 12,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={css.wrapper}>
      <div className={css.headers}>
        <Header />
      </div>
      <div className={css.inputs}>
        <div className={css.inpt}>
          <div>
            <input type="text" placeholder="Job title, keywords..." />
          </div>
          <div>
            <input type="text" placeholder="Categories" />
          </div>
          <div>
            <input type="text" placeholder="Locations" />
          </div>
          <div>
            <button>
              <img src={search} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={css.options}>
        <div className={css.aligin}>
          <div>
            <select>
              <option>Job type</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <div>
            <select>
              <option>All levels</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <div>
            <select>
              <option>All salary ranges</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <div>
            <select>
              <option>Benefits</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={css.map}>
          <Slider {...settings}>
            {/* <h2>1</h2>
            <h2>2</h2>
            <h2>3</h2>
            <h2>4</h2>
            <h2>5</h2>
            <h2>6</h2>
            <h2>7</h2>
            <h2>8</h2>
          <h2>9</h2> */}
              {MapSlider.map((el) => (
          <div className={css.size}>
                <Mapslide key={el.id} {...el} />
            </div>
              ))}
          </Slider>
        </div>
      </div>

      <div className={css.fot}>
        <Footer />
      </div>
    </div>
  );
}

export default ListPages;
