import React from 'react'
import css from './Mapslide.module.scss'



function Mapslide({image,name,title,avatar,contry}) {
  return (
    <div className={css.wrapper}>
    <div className='container'>
        <div className={css.slide_card}>
            <div>
                <img src={image} alt="" />
                <button></button>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{title}</p>
                 <p><img src={avatar} alt="" />{contry}</p>
                <p></p>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Mapslide