import React from 'react';
import './index.css';
import Words from '../Words/index.jsx';

const MileStone = () => {
    return (
        <div id='project' className='mileStone'>
            <div className='boxText'>
                <Words
                    text='Milestones of Projects'
                    subtext='Here are a few  people & projects i’ve patnered and worked on.'
                />

            </div>
            <div className="box-container">
                <div className="box box1">
                    <a href='https://muzir.vercel.app/' target={'_blank'} rel="noreferrer" >
                        <h2> Muzir Web App </h2>
                        <p> React, JavaScript, Tailwind </p>
                    </a>
                </div>
                <div className="box box2">
                <a href='https://quizy-ten.vercel.app/' target={'_blank'} rel="noreferrer" >
                        <h2> Quizy Web App </h2>
                        <p> React, JavaScript, Tailwind </p>
                    </a>
                </div>
                <div className="box box3">
                <a href='https://terra-internship.vercel.app/' target={'_blank'} rel="noreferrer" >
                        <h2> TerraHQ Website </h2>
                        <p> React, JavaScript, CSS </p>
                    </a>
                </div>
                <div className="box box4"></div>
                <div className="box box5"></div>
                <div className="box box6"></div>
            </div>
        </div>
    )
}

export default MileStone