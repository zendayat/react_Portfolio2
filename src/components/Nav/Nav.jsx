import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className ={activeNav === '#' ? 'active' : ""}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className ={activeNav === '#about' ? 'active' : ""}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className ={activeNav === '#experience' ? 'active' : ""}><AiOutlineBook/></a>
      <a href='#service' onClick={() => setActiveNav('#service')} className ={activeNav === '#service' ? 'active' : ""}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className ={activeNav === '#contact' ? 'active' : ""}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav
