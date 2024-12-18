import React from 'react'
import './about.css'
import Words from '../Words'
import {ReactComponent as Twitter} from '../../images/twitter.svg'
import {ReactComponent as LinkedIn} from '../../images/linkedin.svg'
import { GithubLogo } from '@phosphor-icons/react'

const About = () => {
  return (
    <div id='about' className='abouts'>
        <Words 
            center
            text='About Me' 
            subtext="AbdulKareem Ibrahim is a passionate and goal driven Frontend Developer and Techpreneur whose interest is in using technology to build solutions to  solve real world problems."/>
        <div className='Icons'>
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
              <GithubLogo size={38} color="#2b55d4" weight="fill" />
            </a>
            <a href="https://www.linkedin.com/in/abdulkareem-ibrahim-9530161a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target={"_blank"} rel="noreferrer">
              <LinkedIn />{" "}
            </a>
        </div>
    </div>
  )
}

export default About