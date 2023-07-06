import React from "react";
import "./Works.css";

import Upworks from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import facebook from "../../img/Facebook.png";
import {motion} from 'framer-motion';


import { themeContext } from '../../Context';
import { useContext } from 'react';

const Works = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>Works For All These</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          nisi.
          <br />
          Placeat ullam rem debitis ratione?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          nisi.
          <br />
          Placeat ullam rem debitis ratione?
        </span>

        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*Right Side */}

      <div className="w-right">
        <motion.div
     initial={{ rotate: 45 }}
     whileInView={{ rotate: 0 }}
     viewport={{ margin: "-40px" }}
     transition={{ duration: 2.5, type: "spring" }}
        
        >

        
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upworks} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={facebook} alt="" />
          </div>
        </div>
        {/*BackGround Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
