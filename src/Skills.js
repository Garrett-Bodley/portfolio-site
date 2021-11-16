import React from 'react'
import styles from './skills.module.css'
import { Css, Git, HerokuIcon, Html, Postgres, Rails, ReactIcon, Redux, Ruby, Sqlite} from "./icons/SkillsIcons"

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <Css className={styles.icon} />
        <Git className={styles.icon} />
        <Html className={styles.icon} />
        <HerokuIcon className={styles.icon} />
        <Postgres className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <Sqlite className={styles.icon} />
        <Rails  className={styles.icon} />
        <Ruby className={styles.icon} />
        <ReactIcon className={styles.icon} />
        <Redux className={styles.icon} />
      </div>
    </div>
  )
}

export default Skills
