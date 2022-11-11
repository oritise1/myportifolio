import React from "react";
// import Image from "../imges";
import {ReactComponent as Twitter} from '../../images/twitter.svg'
import {ReactComponent as LinkedIn} from '../../images/linkedin.svg'


import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="HeaderWrapper">
      <div className="LinkWrapper">
        <h2 className="Title">Ibrahim AbdulKareem.</h2>
        <div>
          <ul>
          <a href="#about"><li>About Me</li></a>
          <a href="#service"><li>Services</li></a>
          <a href="#Lorem_Ipsum"><li>Projects</li></a>
          <a href="#contact"><li>Contact Me</li></a>
          </ul>
        </div>
        <div className="IconWrapper">
        <a
              href="https://twitter.com/oritise_success"
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
    </div>
  );
};

export default Navbar;
                                               