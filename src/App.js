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
  const [kategoria, setKategoria] = useState(0)
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('https://api.huuto.net/1.1/categories')
        // handle success///
        console.log(response.data.categories)
        setKategoriat(response.data.categories);
        setLadattu(true)
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Tämö suoritetaan aina")

      }
    }
    fetchData();
  }, []);

  useEffect(() => {

    const fetchData = async () => {
      try {
        let response = await axios.get('https://api.huuto.net/1.1/items?category=' + kategoria)
        // handle success///
        console.log(response.data.items)
        setItems(response.data.items)

      } catch (error) {
        console.log(error);
      } finally {
        console.log("Tämö suoritetaan aina")

      }
      fetchData();

    }
  }, [kategoria])

  const kategoriaPainettu = (id) => {
    setKategoria(id)
    console.log(id)
  }
  return (
    <div>
      {!ladattu ? "Dataa lataillaan...." : kategoriat.map(kategoria => <button onClick={() => kategoriaPainettu(kategoria.id)} key={kategoria.id}>{kategoria.title}</button>)}
      <div>{items.map(item => <div>{item.title}</div>)}</div>
    </div>
  );
}
export default App;

