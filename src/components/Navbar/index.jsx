import React from "react";
import {ReactComponent as Twitter} from '../../images/twitter.svg'
import {ReactComponent as LinkedIn} from '../../images/linkedin.svg'
import { GithubLogo } from "@phosphor-icons/react"; 
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="HeaderWrapper">
      <div>
        <h2 className="Title">Ibrahim AbdulKareem <span style={{color:'blue'}}>.</span></h2>
        </div>
        <div>
          <nav>
          <a href="#about" className="edit1">About Me</a>
          <a href="#service" className="edit1">Services</a>
          <a href="#project" className="edit1">Projects</a>
          <a href="#contact" className="edit1">Contact Me</a>
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
            <a
              href="https://github.com/oritise1"
              target={"_blank"}
              rel="noreferrer"
            >
              <GithubLogo size={38} color="#2b55d4" weight="fill"/>
            </a>
            <a href="https://www.linkedin.com/in/abdulkareem-ibrahim-9530161a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target={"_blank"} rel="noreferrer">
              <LinkedIn />{" "}
            </a>
        </div>
      </div>
  );
};

export default Navbar;
                                               