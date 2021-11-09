import React from 'react'
import style from './portfolio.module.css'
import Dots from './icons/Dots'

const Portfolio = () => {
  return (
    <div className={style.container}>
      <section className={style.card}>
        <article className={`${style.project} ${style.projectOne}`}></article>
        <article className={`${style.project} ${style.projectTwo}`}></article>
        <article className={`${style.project} ${style.projectThree}`}></article>
        <Dots count={3} current={1} styles={style.dots} />
      </section>
    </div>
  )
}

export default Portfolio
