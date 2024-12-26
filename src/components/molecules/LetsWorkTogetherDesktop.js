import '../../App.css';
import React from 'react';
import LetsWork from '../../images/LetsWork.svg'

function LetsWorkTogetherDesktop(props) {
    return (
        <div className='letsWorkTogether'>
            <div className='letsWorkLeftDiv'>
                <div className='letsWorkLeftDivTop'>
                    <img src={LetsWork}/>
                </div>
                <h3 className="meIntro">Let's Work <span className="blueHeader">Together </span></h3>
                <div className='holdLineText'>
                    <div className="orangeLine"></div>
                    <p className='textIntro'>
                        From interaction design to scaleable design systems, single-page apps to something more experimental with WebGL. I help awesome people to build ambitious yet accessible web projects - the wilder, the better.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LetsWorkTogetherDesktop;