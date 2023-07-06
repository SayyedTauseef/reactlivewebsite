import React, { useState } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact= () => {

    const form = useRef();
  
const [done, setdone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_j669d2e', 'template_qzp8man', form.current, 'PC387DSRnzbneUMGz')
        .then((result) => {
            console.log(result.text);
            setdone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode

  
  return (
  <div className="contact-form">
<div className="w-left">
<div className="awesome">
    <span style={{color: darkMode? 'white': ''}}>Get in Touch</span>
    <span>Contact Me</span>
    <div className="blur s-blur1" style={{background:"#ABF1FF94"}}>

    </div>
</div>
</div>
<div className="c-right">
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for contacting me"}</span>
          <div className='blur c-blur1' style={{background:"var(--purple)"}}>

          </div>
    </form>
</div>
  </div>
  )
}

export default Contact;
