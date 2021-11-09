import React from "react";
import style from "./dots.module.css";

const Dots = ({ count, current, styles }) => {
  const renderDots = (dotNum) => {
    const dots = new Array(dotNum).fill(0);
    return dots.map((_, idx) => (
      <li
        key={idx}
        className={`${style.dotsItem} ${
          current === idx + 1 ? style.active : style.inactive
        }`}
      />
    ));
  };
  return <ul className={`${style.dots} ${styles}`}>{renderDots(count)}</ul>;
};

export default Dots;
