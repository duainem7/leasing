import React, {useState, useEffect} from "react"
import './App.css';
import Navigation from './nav'
import Swipe from './Swiper'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactLoading from 'react-loading'


function App() {


  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if(isLoading){
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  
  <ReactLoading type={'spinningBubbles'} color={'grey'} height={'17vh'} width={'17vw'} />
      
        
        
      
      </div>
    );
  }

  return (
    <div >
    <Navigation />
    <Swipe />


    </div>
  );
}

export default App;
