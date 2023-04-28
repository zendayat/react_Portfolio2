import React from 'react'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css'
import AVTR1 from './../../assets/avatar1.jpg'
import AVTR2 from './../../assets/avatar2.jpg'
import AVTR3 from './../../assets/avatar3.jpg'
import AVTR4 from './../../assets/avatar4.jpg'

const Data = [
  {
    avatar: AVTR1,
    id: 'Earb Shintu',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing el sed do eiusmod tempor incididt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    avatar: AVTR2,
    id: 'Earb Shintu',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing el sed do eiusmod tempor incididt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    avatar: AVTR3,
    id: 'Earb Shintu',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing el sed do eiusmod tempor incididt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    avatar: AVTR4,
    id: 'Earb Shintu',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing el sed do eiusmod tempor incididt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {
          Data.map(({avatar, id, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='Avatar 1'/>
                </div>
                <h5 className='client__name'>{id}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
