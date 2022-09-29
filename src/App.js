import './App.css';
import NavBar from './Components/NavBar/NavBar';
import GetStarted from './Components/GetStarted/GetStarted';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Prices from './Components/Prices/Prices';

function App() {
  return (
    <>
      <NavBar />
      <GetStarted />
      <HowItWorks />
      <Prices/>
    </>
  );
}

export default App;
