import React from 'react'
import css from './Detalis.module.scss'
import DetalisPageLeft from '../DetalisPagesLeft/DetalisPageLeft'
import DetalisPageRight from '../DetalisPageRight/DetalisPageRight'
import Header from '../HomePage/Header/Header'

function Detalis() {
  
  return (
    <div className={css.wrapper}>
      <div>
        <Header/>
      </div>
        <div className='container'>
            <div className={css.all_tegs}>
            <div className={css.left}>
                <DetalisPageLeft/>
            </div>
            <div className={css.right}>
                <DetalisPageRight/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Detalis