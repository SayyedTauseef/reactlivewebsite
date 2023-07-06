import React from 'react'
import './Footer.css';
import wave from "../../img/wave.png";

import { UilInstagram } from '@iconscout/react-unicons';
import { UilFacebook } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';
const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>sayyedtauseef045@gmail.com</span>
            <div className="f-icons">
                <UilInstagram color='white' size='3rem' />
                <UilFacebook color='white' size='3rem' />
                <UilGithub color='white' size='3rem' />

            
            </div>
        </div>
    </div>
  )
}

export default Footer;
