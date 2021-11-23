import React from "react";
import styles from "./noodlr.module.css";
import Sequencer from "./icons/Sequencer";

const Noodlr = () => {
  return (
    <div className={styles.container}>
      <span className={styles.titleWrapper}>
        <h1 className={styles.title}>Noodlr 2.0<Sequencer className={styles.icon} /></h1>
      </span>
      <p className={styles.content}>
        TLDR: Noodlr with a facelift.
      </p>
      <p className={styles.content}>
        While I was happy with the logic of the original Noodlr, the site's UI was a bit underwhelming. After spending some time learning more about CSS and front end technologies in general, I decided to rebuild it from scratch.
      </p>
      <p className={styles.content}>
        Noodlr 2.0 is built with 100% functional components. It utilizes custom hooks, custom Context Providers, react-spring and more. Currently a front-end only web-app, though a fleshed out back end is in the works.
      </p>
    </div>
  );
};

export default Noodlr;
