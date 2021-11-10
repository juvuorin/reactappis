//import logo from './logo.svg';
//import './App.css';
import React, { useEffect, useState } from 'react';

//Tentti1
import Luokka from './Luokka';

let oppilas1 = { nimi: "Otto Onninpoika", osaalukea: true }
let oppilas2 = { nimi: "Pekka Perä", osaalukea: false }
let oppilas3 = { nimi: "Tarmo Tiusanen", osaalukea: true }

let luokka1 = { kirjain: "A", oppilaat: [oppilas1, oppilas2, oppilas3] }


let oppilas4 = { nimi: "Raimo Riitala", osaalukea: true }
let oppilas5 = { nimi: "Kirski Kokkonen", osaalukea: false }
let oppilas6 = { nimi: "Fabian Fedorov", osaalukea: true }
let oppilas7 = { nimi: "Daniel Downing", osaalukea: true }

let luokka2 = { kirjain: "B", oppilaat: [oppilas4, oppilas5, oppilas6, oppilas7] }

var koulu_ = { nimi: "alakoulu", luokat: [luokka1, luokka2] }

// propseista tulee "koulu"
const Koulu=(props)=> {

    console.log("koulu:",props.koulu)
    return (<div> <div>{props.koulu.koulunNimi}{props.koulu.luokat.map((item, index) => <Luokka key={index} luokka={item} luokkaIndex={index} dispatch={props.dispatch} koulu={props.koulu} />)}
        <button onClick={() => props.dispatch({ type: "LISÄÄ_LUOKKA" })}>Lisää luokka</button>

    </div></div>);
}
export default Koulu;
