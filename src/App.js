//import logo from './logo.svg';
//import './App.css';

import React, { useState } from 'react';

function App() {

  //const muuttuja="Moro2"
  //let muuttuja = 0 
  const päivät = ["ma","ti","ke","to","pe","la","su"] 
  const [valittuPäivä, setValittuPäivä] = useState(päivät[0])
  console.log("App funktiota kutsuttiin")

  const painike1Painettu = () =>{
    setValittuPäivä(päivät[0])
  }
  const painike2Painettu = () =>{
    setValittuPäivä(päivät[1])
    
  }
  const painike3Painettu = () =>{
    setValittuPäivä(päivät[2])
    
  }
  const painike4Painettu = () =>{
    setValittuPäivä(päivät[3])
    
  }
  const painike5Painettu = () =>{
    setValittuPäivä(päivät[4])
    
  }
  const painike6Painettu = () =>{
    setValittuPäivä(päivät[5])
    
  }
  const painike7Painettu = () =>{
    setValittuPäivä(päivät[6])
    
  }

//JSX  map EI for of 
return (<div>
  {päivät.map(item=><p>{item}</p>)}  
  </div>

  );
}

export default App;
