import React from "react";
import NavBar from "../components/organisms/NavBar";
import '../App.css';
import AboutHeroLeft from "../components/molecules/AboutHeroLeft";
import ShadowBlur from "../components/atoms/ShadowBlur";
import MouseDownHeader from "../components/atoms/MouseDownHeader";
import MeImageAbout from "../components/atoms/MeImageAbout";

export default function About() {
  return (

    <div className="homeHero">
      <NavBar/>
      <div className="homeHeroContainer">
        <AboutHeroLeft />
        {/* <HomeHeroRight /> */}

        <div className="holdMeAbout">
            <MeImageAbout/>
        </div>
      </div>
      <ShadowBlur width = {1600}/>
      <MouseDownHeader/>
    </div>
    
  );
}