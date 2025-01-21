import React from "react";
import NavBar from "../components/organisms/NavBar";
import HomeHeroRight from "../components/molecules/HomeHeroRight";
import HomeHeroLeft from "../components/molecules/HomeHeroLeft";
import '../App.css';
import '../index.css';
import ShadowBlur from "../components/atoms/ShadowBlur";
import MouseDownHeader from "../components/atoms/MouseDownHeader";



export default function Projects() {
  return (
    <>
    <div className="homeHero">
      <NavBar/>
      <div className="homeHeroContainer">
        <HomeHeroLeft />
        <HomeHeroRight />
      </div>
      <ShadowBlur width = {1600}/>
      <MouseDownHeader/>
    </div>
    </>
  );
}