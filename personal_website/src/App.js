import logo from './logo.svg';
import LogoImage from './components/atoms/LogoImage';
import LogoHeader from './components/atoms/LogoHeader';
import NavBarDesktop from './components/molecules/NavBarDesktop';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBarDesktop/>

      {/* <LogoHeader headerText="Hello!" />
      <LogoImage />

          <h2> Is this correct? </h2>
          <p className={"navH"}> Is this applied? </p> */}
      </header>
    </div>
  );
}

export default App;
