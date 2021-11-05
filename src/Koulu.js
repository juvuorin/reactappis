//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';

//Tentti1
import Luokka from './Luokka';

let oppilas1 = { nimi: "Otto Onninpoika" }
let oppilas2 = { nimi: "Pekka Perä" }
let oppilas3 = { nimi: "Tarmo Tiusanen" }

let luokka1 = { kirjain: "A", oppilaat: [oppilas1, oppilas2, oppilas3] }


let oppilas4 = { nimi: "Raimo Riitala" }
let oppilas5 = { nimi: "Kirski Kokkonen" }
let oppilas6 = { nimi: "Fabian Fedorov" }
let oppilas7 = { nimi: "Daniel Downing" }

let luokka2 = { kirjain: "B", oppilaat: [oppilas4, oppilas5, oppilas6, oppilas7] }

var koulu_ = { nimi: "alakoulu", luokat: [luokka1, luokka2] }


function Koulu() {

    const [koulu, setKoulu] = useState(koulu_)
    //    [koulu, setKoulu] = useState(koulu)
    console.log("Koulu renderöitiin")
//REDUX
    const dispatch = (o) => {
        //  o = {type:"POISTA_OPPILAS",data: {oppilasIndex:0, luokkaIndex:0}}
        let kouluKopio = (JSON.parse(JSON.stringify(koulu)))
       // let kouluKopio = koulu

        switch (o.type) {
            case "POISTA_OPPILAS":
                kouluKopio.luokat[o.data.luokkaIndex].oppilaat.splice(o.data.oppilasIndex, 1)
                break;
            //  p.setKoulu(JSON.parse(JSON.stringify(p.koulu)))
            case "LISÄÄ_OPPILAS":
                kouluKopio.luokat[o.data.luokkaIndex].oppilaat.push({ nimi: "Olli Oppilas" })
                break;

            case "LISÄÄ_LUOKKA":
                kouluKopio.luokat.push({ kirjain: "T", oppilaat: [] })
                break;

            default: throw "Nyt on jokin vialla"


        }
        setKoulu(kouluKopio)

    }

/*     const poistaOppilas = (luokkaIndex,oppilasIndex)=>{
        let kouluKopio = (JSON.parse(JSON.stringify(koulu)))
    
        kouluKopio.luokat[luokkaIndex].oppilaat.splice(oppilasIndex,1)
              //  p.setKoulu(JSON.parse(JSON.stringify(p.koulu)))
        setKoulu(kouluKopio)
        
            }
    const lisääLuokka = () => {

        let kouluKopio = (JSON.parse(JSON.stringify(koulu)))
        kouluKopio.luokat.push({ kirjain: "C", oppilaat: [] })
        //console.log(koulu.luokat)
        setKoulu(kouluKopio)
        

    }
    const lisääOppilas = (luokkaIndex)=>{
        let kouluKopio = (JSON.parse(JSON.stringify(koulu)))
        kouluKopio.luokat[luokkaIndex].oppilaat.push({nimi: "Olli Oppilas"})
        setKoulu(kouluKopio)

    }
 */    return (<div>{koulu.nimi}{koulu.luokat.map((item, index) => <Luokka luokka={item} luokkaIndex={index} dispatch={dispatch} koulu={koulu} />)}
        <button onClick={() => dispatch({ type: "LISÄÄ_LUOKKA" })}>Lisää luokka</button>

    </div>);
}
export default Koulu;
