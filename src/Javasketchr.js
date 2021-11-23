import React from "react";
import styles from "./javasketchr.module.css";
import Drawing from "./icons/Drawing";

const Javasketchr = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Javasketchr <Drawing className={styles.icon}/></h1>
      <p className={styles.content}>
        A fun single page application that lets users express themselves creatively through drawing. Drawings can be saved locally and/or uploaded to the server.
      </p>
      <p className={styles.content}>
        HTML and Javascript front end which communicates with a Rails API backaned via asynchronous fetch requests.
      </p>
    </div>
  );
};

export default Javasketchr;
