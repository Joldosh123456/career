import React from "react";
import css from "./ListPages.module.scss";
import Header from "../HomePage/Header/Header";
import { MapSlider } from "../../constants/MapSlider";
import Mapslide from "../Mapslide/Mapslide";
import Footer from "../HomePage/Footer/Footer";
import search from '../../components/ListPage/search.png'


function ListPages() {
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
            <input type="text"  placeholder="Locations"/>
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
          <div className={css.size}>
            {MapSlider.map((el) => (
              <Mapslide key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>

      <div className={css.fot}>
        <Footer />
      </div>
    </div>
  );
}

export default ListPages;
