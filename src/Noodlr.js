import React from "react";
import styles from "./noodlr.module.css";
import Sequencer from "./icons/Sequencer";
import ProjectLinks from "./ProjectLinks";

const Noodlr = () => {
  return (
    <div className={styles.container}>
      <span className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Noodlr 2.0
          <Sequencer className={styles.iconMain} />
        </h1>
      </span>
      <p className={styles.content}>TLDR: Noodlr with a facelift.</p>
      <p className={styles.content}>
        While I was happy with the logic of the original Noodlr, the site's UI
        was a bit underwhelming. After spending some time learning more about
        CSS and front end technologies in general, I decided to rebuild it from
        scratch.
      </p>
      <p className={styles.content}>
        Noodlr 2.0 is built with 100% functional components. It utilizes custom
        hooks, custom Context Providers, react-spring and more. Currently a
        front-end only web-app, though a fleshed out back end is in the works.
      </p>
      <ProjectLinks className={styles.links} demo="https://noodlr.netlify.app/" repo="https://github.com/Garrett-Bodley/noodlr-2.0" />
    </div>
  );
};

export default Noodlr;
