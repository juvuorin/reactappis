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
  const [kategoria, setKategoria] =useState(0)
  const [items, setItems] =useState([])

//  https://api.huuto.net/1.1/items?category=86

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
        console.log(response.data.categories)
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

  useEffect(() => {

    /* async
    try {

    } catch {}
    finally{} */

    axios.get('https://api.huuto.net/1.1/items?category='+kategoria)
      .then(function (response) {
        // handle success
        console.log(response.data.items)
        setItems(response.data.items)
       // setKategoriat(response.data.categories);
       // setLadattu(true)

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
  }, [kategoria]);

  const kategoriaPainettu=(id)=>{
    setKategoria(id)
    console.log(id)
  }
    
  return (
    <div>
      {!ladattu?"Dataa lataillaan....":kategoriat.map(kategoria=><button onClick={()=>kategoriaPainettu(kategoria.id)} key={kategoria.id}>{kategoria.title}</button>)}
      
      <div>{items.map(item=><div>{item.title}</div>)}</div>
    </div>
  );

}

export default App;

