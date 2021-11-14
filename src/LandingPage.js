import React from "react";
import styles from  "./landingPage.module.css";
import Down from "./icons/Down"

const LandingPage = () => {
  return (
    <div id="home" className={styles.landingPage}>
      <h1 className={styles.title}>Garrett Bodley</h1>
      <p className={styles.tagline}>a nyc based web developer</p>
      <Down className={styles.icon} />
    </div>
  );
};

export default LandingPage;
