import React from "react";
import NavBar from "../components/organisms/NavBar";
import HomeHeroRight from "../components/molecules/HomeHeroRight";
import ProjectHeroLeft from "../components/molecules/ProjectHeroLeft";
import '../App.css';
import '../index.css';
import ShadowBlur from "../components/atoms/ShadowBlur";
import MouseDownHeader from "../components/atoms/MouseDownHeader";
import MyProjectsDesktop from "../components/molecules/MyProjectsDesktop";
import FooterDesktop from "../components/molecules/FooterDesktop";


export default function Projects() {
  return (
    <>
    <div className="homeHero">
      <NavBar/>
      <div className="homeHeroContainer">
        <ProjectHeroLeft />
        <HomeHeroRight />
      </div>
      <ShadowBlur width = {1600}/>
      <MouseDownHeader/>
    </div>

    <MyProjectsDesktop/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <FooterDesktop/> 
    </>
  );
}