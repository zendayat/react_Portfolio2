import React from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9f9181s', 'template_mo0e73e', form.current, 'UPZ4PPv1S_ZE1llWA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nmapzendaya@gmail.com</h5>
            <a href='mailto:nmapzendaya@gmail.com' target='_blank' className='contact__option-icon'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Zen.Dayat_</h5>
            <a href='https://www.instagram.com' target='_blank' className='contact__option-icon'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Zen.WEBdev</h5>
            <a href='https://www.instagram.com' target='_blank' >Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
