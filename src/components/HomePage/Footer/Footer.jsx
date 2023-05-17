import React from 'react'
import './Footer.scss'
import logo from './images/Logo.svg'
import facebook from './images/IconButton.svg'
import insta from './images/IconButton (1).svg'
import linkedIn from './images/IconButton (2).svg'
import tweeter from './images/IconButton (3).svg'
import email from './images/Message.svg'
import pin from './images/Map marker.svg'
import arrow from './images/iconbase.svg'
import {useTranslation} from 'react-i18next'

function Footer() {
    const {t}= useTranslation()
    return ( 
        <>
        <section className='preFooter'>
            <h1>{t("footer.footer1")}</h1>
            <p>{t("footer.footer2")}</p>
            <div>
                <input type="text" placeholder={t("footer.footer9")} />
                <button>{t("footer.footer3")}</button>
            </div>
        </section>
        <section className='footer'>
            <div className='leftFooter'>
                <img src={logo} alt="" />
                <p>{t("footer.footer4")}</p>
                <div className='messangers'>
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={tweeter} alt="" />
                </div>
            </div>
            <div className='centerFooter'>
                <div className='flexFooter'>
                    <img src={email} alt="" />
                    <a href='#'>info@example.com</a>
                </div>
                <div  className='flexFooter'>
                    <img src={pin} alt="" />
                    <a href='#' >{t("footer.footer5")}</a>
                </div>
            </div>
            <div className='rightFooter'>
                <input type="text"  placeholder={t("footer.footer10")}/>
                <button>
                    <img src={arrow} alt="" />
                </button>
            </div>
        </section>
        <section className='footerEnd'>
            <a href='#'>{t("footer.footer6")}</a>
            <div>
                <a href='#'>{t("footer.footer7")}</a>
                <a href='#'>{t("footer.footer8")}</a>
            </div>
        </section>
        </>
    )
}

export default Footer