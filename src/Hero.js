import React from 'react'
import style from "./hero.module.css"
import Down from "./icons/Down"

const Hero = ({id, text}) => {
  return (
    <div id={id} className={style.container}>
      <h1 className={style.title} >{text}</h1>
      <Down className={style.icon} />
    </div>
  )
}

export default Hero
