import React from 'react'
import style from "./hero.module.css"
import Down from "./icons/Down"

const Hero = ({text}) => {
  return (
    <div className={style.container}>
      <h1 className={style.title} >{text}</h1>
      <Down className={style.icon} />
    </div>
  )
}

export default Hero
