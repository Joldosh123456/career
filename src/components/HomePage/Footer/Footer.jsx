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
function Footer() {
    return (
        <>
        <section className='preFooter'>
            <h1>Get The Right Job For You</h1>
            <p>Subscribe to get updated on latest and relevant career opportunities</p>
            <div>
                <input type="text" placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
        </section>
        <section className='footer'>
            <div className='leftFooter'>
                <img src={logo} alt="" />
                <p>The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.</p>
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
                    <a href='#' >655 Schaefer Dale</a>
                </div>
            </div>
            <div className='rightFooter'>
                <input type="text"  placeholder='Email address'/>
                <button>
                    <img src={arrow} alt="" />
                </button>
            </div>
        </section>
        <section className='footerEnd'>
            <a href='#'>© 2021. All rights reserved</a>
            <div>
                <a href='#'>Help Center</a>
                <a href='#'>Terms of Service</a>
            </div>
        </section>
        </>
    )
}

export default Footer