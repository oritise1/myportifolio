import React from "react";
import Words from "../Words";
import "./skills.css";
import { ReactComponent as Html } from "../../images/html.svg";
import { ReactComponent as JavaScript } from "../../images/javascript.svg";
import { ReactComponent as CSS } from "../../images/css.svg";
import ReactLogo  from "../../images/react.png";

const Skills = () => {
  
  return (
    <div className="SkillsWrapper">
      <Words text="My Skills" subtext="Here are a few skills I possess" />
      <div className="unreender">
        <div>
          <Html />
          <div className="skills">
            <p className="html">HTML</p>
            <div className="skillbar"></div>
          </div>
        </div>
      <div>
          <JavaScript />
          <div className="skills">
            <p className="html">JavaScript</p>
            <div className="skillbar"></div>
          </div>
        </div>
        <div>
          <CSS className="css"/>
          <div className="skills">
            <p className="html">CSS</p>
            <div className="skillbar"></div>
          </div>
        </div>
        <div>
          <div className="reactBack">
          <img src={ReactLogo} alt="react logo" className="react"/>
          </div>
          <div className="skills">
            <p className="html">React</p>
            <div className="skillbar"></div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Skills;
