import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import GetStarted from './Components/GetStarted/GetStarted';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Prices from './Components/Prices/Prices';
import Bottom from './Components/Bottom/Bottom';
import NavBarPC from './Components/NavBar/NavBarPC';

function App() {
  return (
    <>
      <NavBar />
      <div className='WrapperApp'>
        <header className='header'>
          <NavBarPC />
          <GetStarted />
          <HowItWorks />
          <Prices />
          <Bottom />
        </header>
      </div>
    </>
  );
}

export default App;
