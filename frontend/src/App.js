import logo from './logo.svg';
import './App.css';
import Navigation from './nav'
import Swipe from './Swiper'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 

function App() {

  const particlesInit = useCallback(async engine => {      
    await loadFull(engine);
  }, []);

const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);

  return (
    <div >
    <Navigation />
    <Swipe />


    </div>
  );
}

export default App;
