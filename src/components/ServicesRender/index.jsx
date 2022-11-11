import React from "react";
import "./index.css";
import Words from "../Words";
import { ReactComponent as Consulting } from "../../images/consulting.svg";
import { ReactComponent as Development } from "../../images/development.svg";
import { ReactComponent as Testing } from "../../images/testing.svg";
import { ReactComponent as Training } from "../../images/training.svg";
import { ReactComponent as WebDesign } from "../../images/webdesign.svg";
import { ReactComponent as Software } from "../../images/software.svg";
const Services = () => {
  return (
    <div id="service" className="services">
      <div>
        <Words
          text="Services I Render."
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue."
        />
      </div>
      <div className="render">
        <div>
          <Consulting />
          <Words
            text="IT Consulting."
            subtext="I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives."
          />
        </div>
        <div><Development />
          <Words
            text="Web Development."
            subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus."
          />
        </div>
        <div>
          <Testing />
          <Words
            text="Software Testing."
            subtext="I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly."
          />
        </div>
        <div>
          <Training />
          <Words
            text="Training."
            subtext="I offer instructor-led training in a way that fits with the way you work."
          />
        </div>
        <div>
          <WebDesign />
          <Words
            text="Responsive Web Design."
            subtext="I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better."
          />
        </div>
          
        <div>
          <Software />
          <Words
            text="Customer Software Development."
            subtext="I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
