import React from "react";
import style from "./about.module.css";
import Bio from './icons/Bio'
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className={style.container}>
        <h1 className={style.title}>About Me <Bio className={style.icon} /></h1>
        <p className={style.content}>
          Former musician turned web developer.
        </p>
        <p className={style.content}>
          In many ways, I think the aspects of my personality that made me excel musically are the same that drove me towards the world of programming. A huge part of studying music is the process of exploring new systems, learning the various rules, and seeing how they relate to what you already know. I've found programming to be remarkably similar, with the many frameworks and languages akin to different scales, chords, songs, or ensembles.
        </p>
        <p className={style.content}>
          I strongly believe that my creative, curious demeanor, and ability to flexibly integrate into a team is of value to any future employer.
        </p>
        <Skills/>
    </div>
  );
};

export default About;
