import React from "react";
import styles from "./breadbook.module.css";
import Baking from "./icons/Baking"
import ProjectLinks from "./ProjectLinks";

const Breadbook = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Breadbook <Baking className={styles.icon} /> </h1>
      <p className={styles.content}>
        While making sourdough, like any process utilizing fermentation, there exists natural variation due to temperature, humidity, starter strength, etc. Breadbook is an online utility that helps users log actions throughout the process, tracking the time, what was done, and leaving space for any additional notes.
      </p>
      <p className={styles.content}>
        It incorporates social media functionality, allowing users to browse the recipes and ingredients of other users (ranked by usage or popularity if desired). Users may comment on, like, and bookmark various recipes as well.
      </p>
      <ProjectLinks className={styles.links} demo="https://breadbook.herokuapp.com/" repo="https://github.com/Garrett-Bodley/BreadBook" />
    </div>
  );
};

export default Breadbook;
