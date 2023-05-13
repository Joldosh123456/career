import React, { useState } from 'react'
import css from './Mapslide.module.scss'
import grafick from '../../assets/Mapslide/ic_increase_level.png'
import money from '../../assets/Mapslide/money.png'
import clock from '../../assets/Mapslide/clock.png'
import profile from '../../assets/Mapslide/profile.png'
import avatar from '../../assets/Mapslide/avatar.png'
import { useTranslation } from 'react-i18next'
import like from '../ListPage/like.png'
import action_like from '../ListPage/active_like.png'



function Mapslide({image,name,title,country}) {
    const {t} = useTranslation()
    const [imageSrc, setImageSrc] = useState(like);

    const handleClick = () => {
        if (imageSrc === like) {
            setImageSrc(action_like)
        } else {
            setImageSrc(like)
        }
    }

  return (
    <div className={css.wrapper}>
    <div className='container'>
        <div className={css.slide_card}>
            <div className={css.card_top}>
                <img src={image} alt="" />
                <img className={css.likes} src={imageSrc} alt="" onClick={handleClick} />
            </div>
            <div className={css.card_center}>
                <h2>{t(name)}</h2>
                <p>{t(title)}</p>
                 <p><img src={avatar} alt="" />{t(country)}</p>
                <p>{t("map.map3")}</p>
            </div>
            <div className={css.card_end}>
                <div className={css.bottom_first}>
                    <div className={css.card}>
                        <img src={grafick} alt="" />
                        <p>{t("map.map18")}</p>
                    </div>
                    <div className={css.card}>
                        <img src={clock} alt="" />
                        <p>{t("map.map19")}</p>
                    </div>
                </div>
                <div className={css.bottom_two}>
                    <div className={css.card}>
                        <img src={money} alt="" />
                        <p>$1,250 ~ $3000</p>
                    </div>
                    <div className={css.card}>
                        <img src={profile} alt="" />
                        <p>{t("map.map20")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Mapslide