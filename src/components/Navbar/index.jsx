import React from "react";
// import Image from "../imges";
import {ReactComponent as Twitter} from '../../images/twitter.svg'
import {ReactComponent as LinkedIn} from '../../images/linkedin.svg'


import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="HeaderWrapper">
      <div>
        <h2 className="Title">Ibrahim AbdulKareem <span style={{color:'blue'}}>.</span></h2>
        </div>
        <div>
          <nav>
          <a href="#about">About Me</a>
          <a href="#service">Services</a>
          <a href="#Lorem_Ipsum">Projects</a>
          <a href="#contact">Contact Me</a>
          </nav>
        </div>
        <div className="IconWrapper">
        <a
              href="https://twitter.com/oritse__success"
              target={"_blank"}
              rel="noreferrer"
            >
              <Twitter className="twitter" />{" "}
            </a>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              <LinkedIn />{" "}
            </a>
        </div>
      </div>
  );
};

export default Navbar;
                                               