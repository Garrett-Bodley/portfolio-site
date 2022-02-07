import React from "react";
import styles from "./javasketchr.module.css";
import Drawing from "./icons/Drawing";
import ProjectLinks from "./ProjectLinks";

const Javasketchr = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Javasketchr <Drawing className={styles.icon}/></h1>
      <p className={styles.content}>
        A single page application that lets users draw via the MDN canvas API. Drawings can be saved locally and/or uploaded to the server.
      </p>
      <p className={styles.content}>
        HTML and Javascript front end which communicates with a Rails API backaned via asynchronous fetch requests.
      </p>
      <ProjectLinks className={styles.links} demo="https://stoic-ride-9fda3f.netlify.app/" repo="https://github.com/Garrett-Bodley/JavaSketcher" />
    </div>
  );
};

export default Javasketchr;
