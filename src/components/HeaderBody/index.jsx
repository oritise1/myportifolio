import React from "react";
import "./index.css";
// import Image from "../imges";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
import ProfileImg from "../../images/ibrahim.webp";
const HeadBody = () => {
  return (
    <div className="bodyWrapper">
      <div className="left">
        <h3 className="there">HI THERE</h3>
        <h3 className="name">I AM ABDULKAREEM IBRAHIM</h3>
        <h4 className="themes">
          Developing applications (coding, programming) · Debugging and testing
          code·
        </h4>
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
      <div className="right">
        <div >
          <img src={ProfileImg} id="profile__img" alt="img" className="immg" />
        </div>
      </div>
    </div>
  );
};

export default HeadBody;
