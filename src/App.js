//import logo from './logo.svg';
//import './App.css';

import React, { useState } from 'react';

function App() {

  const [ylempiLista,setYlempiLista] = useState(["Paavo", "Tytti","Ilkka","Sauli"])
  const [alempiLista,setAlempiLista] = useState([])

  const alasPainettu = () =>{
    let ylemmanViimeinenAlkio = ylempiLista[ylempiLista.length-1]
    setAlempiLista([...alempiLista,ylemmanViimeinenAlkio])
    ylempiLista.pop()
    setYlempiLista([...ylempiLista])
    
   
  }
  const ylösPainettu = () =>{

    let alemmanEkaAlkio = alempiLista[0]
    setYlempiLista([...ylempiLista, alemmanEkaAlkio])
    alempiLista.shift()
    setAlempiLista([...alempiLista])
      
  }

  return (<div>
    {ylempiLista.map(item=><div>{item}</div>)}
    <button onClick={ylösPainettu}   >ylös</button>
    <button onClick={alasPainettu}>alas</button>
    {alempiLista.map(item=><div>{item}</div>)}


  </div>


  )

}

export default App;
