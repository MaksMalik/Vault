import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import GetStarted from './Components/GetStarted/GetStarted';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Prices from './Components/Prices/Prices';
import Bottom from './Components/Bottom/Bottom';

function App() {
  return (
    <>
      <NavBar />
      <GetStarted />
      <HowItWorks />
      <Prices />
      <Bottom/>
    </>
  );
}

export default App;
