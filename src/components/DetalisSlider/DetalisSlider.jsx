import React from 'react'
import css from './DetalisSlider.module.scss'
import { useTranslation } from "react-i18next";






function DetalisSlider({image,title,name}) {
  const {t} = useTranslation()
  return (
    <div className={css.wrapper}>
        
        <div className={css.card}>
            <div>
                <img src={image} alt="ikon" />
            </div>
            <div>
                <h2>{t(name)}</h2>
                <p>{t(title)}</p>
            </div>
        </div>
    </div>
  )
}

export default DetalisSlider