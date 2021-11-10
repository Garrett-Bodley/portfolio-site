import React from "react";
import style from "./javasketchr.module.css";
import Drawing from "./icons/Drawing";

const Javasketchr = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Javasketchr <Drawing className={style.icon}/></h1>
      <p className={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Javasketchr;
