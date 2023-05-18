import React from "react";
import { LeftConst } from "../../../constants/LeftConst";
import LeftCard from "./LeftCard/LeftCard";
import scss from "./BlockPageLeft.module.scss";

function BlockPageLeft() {
  const lCard = LeftConst.map((item) => <LeftCard key={item.id} {...item} />);
  return (
    <>
      <div className={scss.blog}>
        <div className={scss.blog_page_left}>
          <div className={scss.left_card}>{lCard.slice(0, 4)}</div>
        </div>

        <div className={scss.blog_page_left}>
          <div className={scss.center_card}>{lCard.slice(4, 10)}</div>
        </div>
      </div>
    </>
  );
}

export default BlockPageLeft;
