//import logo from './logo.svg';
//import './App.css';
import React, { useEffect, useState } from 'react';
import Koulu from './Koulu';

const axios = require('axios');
//Tentti1



const KouluSovellus=(props)=> {
    const [dataNoudettu, setDataNoudettu] = useState(false)
    const [koulut, setKoulut] = useState()
    const [valittuKoulu,setValittuKoulu] = useState()
    //    [koulu, setKoulu] = useState(koulu)
//    console.log("Koulu renderöitiin")
    //REDUX

    const lisääKoulu=() =>{

        let koulutKopio = JSON.parse(JSON.stringify(koulut))
        koulutKopio.push({"id":koulutKopio.length,"koulunNimi":koulutKopio.length, "luokat":[]})
        setKoulut(koulutKopio);

    }
    useEffect(() => {
        if (!dataNoudettu) {
            axios.get('http://localhost:3001/koulut')
            .then(function (response) {
              // handle success
              console.log(response.data);

              setKoulut(response.data)
              setDataNoudettu(true)

            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });}
          
    }, [])
    console.log("Valittu koulu on:" +valittuKoulu)
    return (<div>{(dataNoudettu==true) && <div>{koulut.map((item, index) => <button onClick={() =>{setValittuKoulu(index)}}>Näytä koulu {item.koulunNimi} </button>)}
    <button  onClick={lisääKoulu}   >Lisää koulu</button>
    {(valittuKoulu!==undefined) && <Koulu koulu={koulut[valittuKoulu]} setKoulut={setKoulut} kouluIndex={valittuKoulu} koulut={koulut}></Koulu>}
    </div>}</div>);
}
export default KouluSovellus;
