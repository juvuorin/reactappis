//import logo from './logo.svg';
//import './App.css';
import Box from '@mui/material/Box';
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
  return (<div><div>{näyttö}</div>

<div style={{ width: '100%' }}> 
<Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
      {kirjaimet.map((kirjain) =><Box sx={{ p: 1, bgcolor: 'grey.300' }}> <Nappula sisältö={kirjain} lisääMerkki={lisääMerkki}> </Nappula></Box>)}
      </Box>


  </div><div class="grid">
     

    </div></div>)

}

export default App;

