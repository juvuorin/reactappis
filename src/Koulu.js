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
    const [dataNoudettu, setDataNoudettu] = useState(false)
    const [koulu, setKoulu] = useState()
    //    [koulu, setKoulu] = useState(koulu)
    console.log("Koulu renderöitiin")
    //REDUX

    useEffect(() => {

       setKoulu(props.koulu)

    }, [props.koulu])
    const dispatch = (o) => {
        //  o = {type:"POISTA_OPPILAS",data: {oppilasIndex:0, luokkaIndex:0}}
        let koulutKopio = (JSON.parse(JSON.stringify(props.koulut)))
        // let kouluKopio = koulu

        switch (o.type) {
/*             case "POISTA_OPPILAS":
                kouluKopio.luokat[o.data.luokkaIndex].oppilaat.splice(o.data.oppilasIndex, 1)
                break;
            //  p.setKoulu(JSON.parse(JSON.stringify(p.koulu)))
            case "LISÄÄ_OPPILAS":
                kouluKopio.luokat[o.data.luokkaIndex].oppilaat.push({ nimi: "Olli Oppilas" })
                break;
 */            case "LISÄÄ_LUOKKA":
                koulutKopio[props.kouluIndex].luokat.push({ kirjain: "T", oppilaat: [] })
                props.setKoulut(koulutKopio)
                break;
/*             case "OPPILAAN_NIMI_MUUTTUI":
                kouluKopio.luokat[o.data.luokkaIndex].oppilaat[o.data.oppilasIndex].nimi = o.data.nimi
                break;
            case "OPPILAAN_LUKUTAITOTIETO_MUUTTUI":
                kouluKopio.luokat[o.data.luokkaIndex].oppilaat[o.data.oppilasIndex].osaalukea = !kouluKopio.luokat[o.data.luokkaIndex].oppilaat[o.data.oppilasIndex].osaalukea
                break;
 */            default: throw "Nyt on jokin vialla"



        }
/*         console.log(kouluKopio)
        setKoulu(kouluKopio)
 */
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
 */
    console.log(koulu)
    return (<div> <div>{props.koulu.koulunNimi}{props.koulu.luokat.map((item, index) => <Luokka luokka={item} luokkaIndex={index} dispatch={dispatch} koulu={props.koulu} />)}
        <button onClick={() => dispatch({ type: "LISÄÄ_LUOKKA" })}>Lisää luokka</button>

    </div></div>);
}
export default Koulu;
