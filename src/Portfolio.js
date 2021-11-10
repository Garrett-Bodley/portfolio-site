import React from 'react'
import style from './portfolio.module.css'
import Down from './icons/Down'

const Portfolio = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title} >Projects</h1>
      <Down className={style.icon} />
    </div>
  )
}

export default Portfolio
