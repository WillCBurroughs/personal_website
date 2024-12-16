import React from "react";
import Facebook from "../../images/Facebook.svg"
import Github from "../../images/Github.svg"
import Instagram from "../../images/Instagram.svg"
import LinkedIn from "../../images/LinkedIn.svg"

function HomeHeroleft() {

    return (
        <div className="homeHeroLeftDiv">
            <p className="nameHeroLeft">William Burroughs</p>
            <div className="holdHeaderHeroLeft">
                <h2 className="mainHeaderHeroleft"> <span className="blueHeader">I Turn Ideas Into Functional, High-Performance </span> Solutions That Deliver</h2>
            </div>
            <div class="arrowLink">
                <a href="#">My Projects</a>
                <a href="#">Contact Me</a>
            </div>
            <div class="holdSocials">
                <img src = {Facebook} width = {"30px"} />
                <img src = {Github} width = {"30px"} />
                <img src = {Instagram} width = {"30px"} />
                <img src = {LinkedIn} width = {"30px"} />
            </div>
        </div>
    );
}

export default HomeHeroleft;