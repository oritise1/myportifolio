import React from 'react'
import './footer.css'
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Envelope } from "../../images/envelope.svg";

const Footer = () => {
  return (
    <div className='FooterWrapper'>
        <div className='FooterContentWrapper'>
            <div className='columnTwo'></div>
            <div className='text'>AbdulKareem Ibrahim <span style={{color:'blue'}}>.</span></div>
            <div className='columnThree'></div>
        </div>
        <div>
          <div className='Iconn'>
            <a href='https://google.com' target={'_blank'}rel="noreferrer"><Linkedin style={{marginRight: '24px'}}/></a>
            <a href='https://twitter.com/oritse__success' target={'_blank'}rel="noreferrer"><Twitter style={{marginRight: '24px'}} /></a>
            <a href='mailto:ikareemabiodun730@gmail.com' target={'_blank'}rel="noreferrer"><Envelope /></a>
          </div>
          <div className='copy'>
            <h2> Copyright &copy; 2021 | All Right Reserved</h2>
          </div>
        </div>
    </div>
  )
}

export default Footer