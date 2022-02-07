import React from "react";
import styles from "./projectlinks.module.css";
import Demo from "./icons/Demo";
import GithubIcon from "./icons/GithubIcon";

const ProjectLinks = ({demo, repo, className}) => {
  return (
    <div className={`${styles.iconLinks} ${className}`}>
      <a href={demo} target="_blank">
        <Demo className={styles.icons} />
      </a>
      <a href={repo} target="_blank">
        <GithubIcon className={styles.icons} />
      </a>
    </div>
  );
};

export default ProjectLinks;
