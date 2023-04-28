import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {RiTwitterFill} from 'react-icons/ri'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        ZenDAYAT
      </a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#services'>services</a></li>
        <li><a href='#portfolio'>portfolio</a></li>
        <li><a href='#testimonials'>testimonials</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><RiTwitterFill/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Craizee Ft Egeator. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
