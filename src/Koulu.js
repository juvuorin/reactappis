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

    const lisääLuokka = () => {
        koulu.luokat.push({ kirjain: "C", oppilaat: [] })
        console.log(koulu.luokat)

//        let uusiKoulu=JSON.parse(JSON.stringify(koulu)) 
        //koulu === uusiKoulu
//        let uusiKoulu={...koulu} 

        setKoulu({...koulu})
        

    }
    return (<div>{koulu.nimi}{koulu.luokat.map(item => <Luokka luokka={item} setKoulu={setKoulu} koulu={koulu} />)}
        <button onClick={lisääLuokka}>Lisää luokka</button>

    </div>);
}
export default Koulu;
