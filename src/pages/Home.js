import React from "react";
import NavBar from "../components/organisms/NavBar";
import '../App.css';

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
    <div className="homeHero">
      {/* <header className="App-header"> */}
      <NavBar/>

      {/* <LogoHeader headerText="Hello!" />
      <LogoImage />

          <h2> Is this correct? </h2>
          <p className={"navH"}> Is this applied? </p> */}
      {/* </header> */}
    </div>
  );
}