import React from "react";
import Facebook from "../../images/Facebook.svg"
import Github from "../../images/Github.svg"
import Instagram from "../../images/Instagram.svg"
import LinkedIn from "../../images/LinkedIn.svg"

function ProjectHeroLeft() {

    return (
        <div className="homeHeroLeftDiv">
            <div className="holdHeaderHeroLeft">
                <h2 className="mainHeaderHeroleft"> <span className="blueHeader">My Work</span> </h2>
            </div>

            <div className="holdIntro">
            <p className="textIntroProjects">

            Welcome to my portfolio! I’m a passionate developer creating innovative, efficient, and scalable solutions. Explore projects showcasing expertise in modern technologies, creative problem-solving, and seamless user experiences.           </p>
            </div>

            <div className="arrowLink">
                <a href="#">My Projects</a>
                <a href="#">Contact Me</a>
            </div>
            <div className="holdSocials">
               <a href="https://www.linkedin.com/in/william-carson-burroughs/"><img src = {LinkedIn} width = {"30px"} /></a>
               <a href="https://github.com/WillCBurroughs"><img src = {Github} width = {"30px"} /></a>
               <a href="https://www.instagram.com/w.burroughs/"><img src = {Instagram} width = {"30px"} /></a>
               <a href="https://www.facebook.com/william.burroughs.1610/"><img src = {Facebook} width = {"30px"} /></a>
            </div>
        </div>
    );
}

export default ProjectHeroLeft;