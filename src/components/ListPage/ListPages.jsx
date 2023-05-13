import React from 'react'
import css from './ListPages.module.scss'
import Header from '../HomePage/Header/Header'
import { MapSlider } from '../../constants/MapSlider'
import Mapslide from '../Mapslide/Mapslide'
import Footer from '../HomePage/Footer/Footer'

function ListPages() {
  return (
    <div className={css.wrapper}>
        <div className={css.headers}>
            <Header/>
        </div>
        <div className='container'>

        <div className={css.map}>
            <div className={css.size}>
            {
                MapSlider.map((el) => (
                    <Mapslide key={el.id} {...el}/>
                ))
            }
            </div>
            </div>
        </div>
        <div className={css.fot}>
            <Footer/>
        </div>
    </div>
  )
}

export default ListPages