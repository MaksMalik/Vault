import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import GetStarted from './Components/GetStarted/GetStarted';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Prices from './Components/Prices/Prices';
import Bottom from './Components/Bottom/Bottom';

function App() {
  return (
    <>
      <div className='WrapperApp'>
          <NavBar />
        <header>
          <div className='test'></div>

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
