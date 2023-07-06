import React from 'react'
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Card from '../Card/Card';
import {motion} from 'framer-motion';

import { themeContext } from '../../Context';
import { useContext } from 'react';

const Servics = () => {
  const transition = {duration: 1, type:'spring'}

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='services' id='Services'>
      
     {/*Left Side */}

<div className="awesome">
<span style={{color:darkMode? 'white': ''}}>My Awesome</span>
<span>Services</span>
<span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nisi. 
    <br />
    Placeat ullam rem debitis ratione?
</span>

<button className='button s-button'> CV</button>
<div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
</div>


{/*Right Side */}

<div className="cards">
    <motion.div
    whileInView={{left:'14rem'}}
    initial={{left:'25rem'}}
    transition={transition}
    style={{left:'14rem'}}>
        <Card
        emoji = {HeartEmoji}
        heading = {'Design'}
        detail = {"Figma, Sketch, Photoshop. Adobe XD, Canva"}
        
        
        />

    </motion.div>

     {/*Second Card */}
    <div style={{top:'12em', left:'-6rem'}}>

       

     <Card 
     emoji = {glasses}
     heading = {"Developer"}
     detail = {"Html, Css, javaScript, React, nodeJs, Mongodb"}
     
     />
     </div>

    {/*Third Card */}
<div style={{top:"21rem", left:'12rem'}}>
<Card
   
   emoji={humble}
   heading={"UI/UX"}
   detail={'lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nisi. '}
   
   />
</div>

<div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
  
    </div>
</div>

  )
}

export default Servics;
