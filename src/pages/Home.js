import React from "react";
import NavBar from "../components/organisms/NavBar";
import HomeHeroLeft from "../components/molecules/HomeHeroLeft"
import '../App.css';
import ShadowBlur from "../components/atoms/ShadowBlur"
import MouseDownHeader from "../components/atoms/MouseDownHeader";
import HomeHeroRight from "../components/molecules/HomeHeroRight";

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
        <p>Hello</p>
    </div>
    </>
  );
}