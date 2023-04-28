import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <div>
      <div className = "container header__container">
        <h5>Hello, I am</h5>
        <h1>Zen Craizee</h1>
        <h5 className = "text-light">
          Frontend Web Developer
        </h5>
        <CTA />
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt=''></img>
        </div>

        <div><a href='#contacts' className='scroll__down'>Scroll Down</a></div>
      </div>
    </div>
  )
}

export default Header
