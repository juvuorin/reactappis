//import logo from './logo.svg';
//import './App.css';

import React, { useState } from 'react';
import Nappula from './Nappula'
function App() {

  
  const [kirjaimet, setKirjaimet] = useState(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "="])
  const [näyttö,setNäyttö] = useState("")
  // deep copy, shallow copy
  
  const lisääMerkki = (merkki) =>{

    if (merkki==="=") {
      setNäyttö(eval (näyttö))
    } else {
      setNäyttö(näyttö+merkki)
    }
  }
  return (<div><div>{näyttö}

  </div><div class="grid">
      {kirjaimet.map((kirjain) => <Nappula sisältö={kirjain} lisääMerkki={lisääMerkki}> </Nappula>)}
     

    </div></div>)

}

export default App;

