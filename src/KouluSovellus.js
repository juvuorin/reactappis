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
    const dispatch = (o) => {
        //  o = {type:"POISTA_OPPILAS",data: {oppilasIndex:0, luokkaIndex:0}}
        let koulutKopio = (JSON.parse(JSON.stringify(koulut)))
        // let kouluKopio = koulu

        switch (o.type) {
             case "POISTA_OPPILAS":
                koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat.splice(o.data.oppilasIndex, 1)
                break;
            //  p.setKoulu(JSON.parse(JSON.stringify(p.koulu)))
            case "LISÄÄ_OPPILAS":
                koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat.push({ nimi: "Olli Oppilas" })
                break;
             case "LISÄÄ_LUOKKA":
                koulutKopio[valittuKoulu].luokat.push({ kirjain: "T", oppilaat: [] })
                //props.setKoulut(koulutKopio)
                break;
             case "OPPILAAN_NIMI_MUUTTUI":
                koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat[o.data.oppilasIndex].nimi = o.data.nimi
                break;
            case "OPPILAAN_LUKUTAITOTIETO_MUUTTUI":
                koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat[o.data.oppilasIndex].osaalukea = !koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat[o.data.oppilasIndex].osaalukea
                break;
             default: throw "Nyt on jokin vialla"
        }
        setKoulut(koulutKopio)
    }

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
    {(valittuKoulu!==undefined) && <Koulu koulu={koulut[valittuKoulu]} dispatch={dispatch}setKoulut={setKoulut} kouluIndex={valittuKoulu} koulut={koulut}></Koulu>}
    </div>}</div>);
}
export default KouluSovellus;
