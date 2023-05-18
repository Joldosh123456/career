import React from "react";
import BlockPageLeft from "./BlockPageLeft/BlockPageLeft";
import BlockPageRight from "./BlockPageRight/BlockPageRight";
import css from "./BlockPage.module.scss";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";

function BlockPage() {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <div className="container">
          <div className={css.all_tegs}>
            <div className={css.left}>
              <BlockPageLeft />
            </div>
            <div className={css.right}>
              <BlockPageRight />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BlockPage;