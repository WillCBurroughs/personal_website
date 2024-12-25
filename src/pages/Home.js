import React from "react";
import NavBar from "../components/organisms/NavBar";
import HomeHeroLeft from "../components/molecules/HomeHeroLeft"
import '../App.css';
import ShadowBlur from "../components/atoms/ShadowBlur"
import MouseDownHeader from "../components/atoms/MouseDownHeader";
import HomeHeroRight from "../components/molecules/HomeHeroRight";
import MeImage from "../components/atoms/MeImage";
import MyProjectsDesktop from "../components/molecules/MyProjectsDesktop";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <NavBarDesktop/>

//       {/* <LogoHeader headerText="Hello!" />
//       <LogoImage />

//           <h2> Is this correct? </h2>
//           <p className={"navH"}> Is this applied? </p> */}
//       </header>
//     </div>
//   );
// }

// export default App;

export default function Home() {
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
    <div className="meHomeSection">
        <div className="holdMe">
            <MeImage/>
            <div className="holdIntro">
                <h3 className="meIntro">Hi, I'm <span className="blueHeader">Will Burroughs </span></h3>
            </div>
            <div className="orangeLine"></div>
            <p className="textIntro">

            Welcome to my portfolio! I'm William Burroughs, a dedicated software architect with a passion for crafting innovative solutions in fintech and beyond. With expertise in cloud computing, app development, and AWS architecture, I aim to revolutionize the digital landscape while building a career that makes a meaningful impact      <br/> <br/>
            Explore my work and see how I turn ideas into reality, one project at a time. Let’s create something extraordinary together.            </p>
        </div>
    </div>
    <MyProjectsDesktop/>
    </>
  );
}