//import logo from './logo.svg';
//import './App.css';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import Nappula from './Nappula'
import SimpleDialogDemo from './SimpleDialog'
import App3 from './App3'
const axios = require('axios');
function App() {


  const [kategoriat, setKategoriat] = useState([])
  const [ladattu, setLadattu] = useState(false)

//  const [count, setCount] = useState(0);
  //https://api.huuto.net/1.1/categories
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    /* async
    try {

    } catch {}
    finally{} */

    axios.get('https://api.huuto.net/1.1/categories')
      .then(function (response) {
        // handle success
        setKategoriat(response.data.categories);
        setLadattu(true)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        console.log("Tämö suoritetaan aina")
        // always executed
      });


    console.log("kutsuttiin")
  }, []);


  return (
    <div>
      {!ladattu?"Dataa lataillaan....":kategoriat.map(kategoria=><div key={kategoria.id}>{kategoria.title}</div>)}
      
    </div>
  );

}

export default App;

