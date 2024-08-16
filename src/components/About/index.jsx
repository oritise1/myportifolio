import React from 'react'
import './about.css'
import Words from '../Words'
import {ReactComponent as Twitter} from '../../images/twitter.svg'
import {ReactComponent as LinkedIn} from '../../images/linkedin.svg'
const About = () => {
  return (
    <div id='about' className='abouts'>
        <Words 
            center
            text='About Me' 
            subtext="AbdulKareem Ibrahim is a passionate and goal driven Techpreneur whose interest is in using technology to build solutions to  solve real world problems."/>
        <div className='Icons'>
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
  )
}

export default About