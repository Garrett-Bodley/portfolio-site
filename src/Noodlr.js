import React from "react";
import styles from "./noodlr.module.css";
import Sequencer from "./icons/Sequencer";

const Noodlr = () => {
  return (
    <div className={styles.container}>
      <span className={styles.titleWrapper}>
        <h1 className={styles.title}>Noodlr<Sequencer className={styles.icon} /></h1>
      </span>
      <p className={styles.description}>
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

export default Noodlr;
