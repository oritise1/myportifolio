import React from "react";
import Words from "../Words";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
import { ReactComponent as Phone } from "../../images/phone.svg";
import { ReactComponent as Gmail } from "../../images/gmail.svg";

import "./contact.css";
const Contact = () => {
  return (
    <div id="contact" className="ContactWrapper">
      <div className="LeftWrapper">
        <Words
          text="Get In Touch."
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue."
        />
        <div style={{ margin: "20px 0" }}>
          <div className="Icons">
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
        <div style={{ marginTop: 60 }}>
          <div className="CIconWrapper">
            <Gmail />
            <div>
              <p className="On">ikareemabiodun730@gmail.com</p>
              <p className="Non">Send a message Anytime!</p>
            </div>
          </div>
          <div className="CIconWrapper" style={{ marginTop: 32, width: "36%" }}>
            <Phone />
            <div>
              <p className="On">+234-8031-664882 </p>
              <p className="Non">Send a message Anytime!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="RightWrapper">
        <div>
          <h2 className="headerOne">Need a Service?</h2>
          <h2 className="headerTwo">Send A Message</h2>
        </div>
        <div style={{ marginTop: 40 }}>
          <input type="text" placeholder="Enter fullname" className="input" />
          <input
            type="text"
            placeholder="Enter Email Address"
            className="input"
          />
          <input
            type="text"
            placeholder="Write A Message"
            className="input"
            style={{ height: "75px" }}
          />
        </div>
        <button className="btn">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
