//import logo from './logo.svg';
//import './App.css';
import React, { useEffect, useState } from 'react';
import { uid } from 'uid';

import Koulu from './Koulu';

const axios = require('axios');
//Tentti1


//Put, Delete, post??


const KouluSovellus = (props) => {
    const [dataNoudettu, setDataNoudettu] = useState(false)
    const [koulut, setKoulut] = useState()
    const [valittuKoulu, setValittuKoulu] = useState()
    const [päivitäKoulu, setPäivitäKoulu] = useState(false)
    const [lisääKoulu, setLisääKoulu] = useState(false)
    const [poistaKoulu, setPoistaKoulu] = useState(false)
    //const [dispatch] = useReducer (reducer)
    //    [koulu, setKoulu] = useState(koulu)
    //    console.log("Koulu renderöitiin")
    //REDUX
    const dispatch = (o) => {
        //  o = {type:"POISTA_OPPILAS",data: {oppilasIndex:0, luokkaIndex:0}}
        let koulutKopio = (JSON.parse(JSON.stringify(koulut)))
        // let kouluKopio = koulu

        switch (o.type) {

            case "LISÄÄ_KOULU":
                setLisääKoulu(true)
                break;
            case "POISTA_KOULU":
                setPoistaKoulu(true)
                break;
            case "POISTA_OPPILAS":
                koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat.splice(o.data.oppilasIndex, 1)
                setPäivitäKoulu(true)

                break;
            //  p.setKoulu(JSON.parse(JSON.stringify(p.koulu)))
            case "LISÄÄ_OPPILAS":
                koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat.push({ nimi: "Olli Oppilas" })
                setPäivitäKoulu(true)

                break;
            case "LISÄÄ_LUOKKA":
                koulutKopio[valittuKoulu].luokat.push({ kirjain: "T", oppilaat: [] })
                setPäivitäKoulu(true)

                //props.setKoulut(koulutKopio)
                break;
            case "OPPILAAN_NIMI_MUUTTUI":
                koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat[o.data.oppilasIndex].nimi = o.data.nimi
                setPäivitäKoulu(true)

                break;
            case "OPPILAAN_LUKUTAITOTIETO_MUUTTUI":
                koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat[o.data.oppilasIndex].osaalukea = !koulutKopio[valittuKoulu].luokat[o.data.luokkaIndex].oppilaat[o.data.oppilasIndex].osaalukea
                setPäivitäKoulu(true)

                break;
            default: throw "Nyt on jokin vialla"
        }
        setKoulut(koulutKopio)

    }



    const päivitäKoulu_ = () => {
        axios.put('http://localhost:3001/koulut/' + koulut[valittuKoulu].id, koulut[valittuKoulu])
            .then(function (response) {
                // handle success
                setPäivitäKoulu(false)
                console.log("koulun tiedot päivitetty ok");

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setPäivitäKoulu(false)

            })
            .then(function () {
                // always executed
            });


    }

    const poistaKoulu_ = async () => {
        console.log("poistetaan koulu")
        try {
            let response = await axios.delete('http://localhost:3001/koulut/' + koulut[valittuKoulu].id)
            console.log("koulu poistettu ok");
            let koulutKopio = JSON.parse(JSON.stringify(koulut))
            koulutKopio.splice(valittuKoulu, 1)

            //awaitin jälkeen jokainen näistä johtaa renderöitiin - ei batchia!
            setValittuKoulu(undefined) 
            setPoistaKoulu(false)
            setKoulut(koulutKopio)
          
        } catch (a) {

        }

    }



    const lisääKoulu_ = () => {

        let koulutKopio = JSON.parse(JSON.stringify(koulut))
        let uusiKoulu = { "id": uid(), "koulunNimi": "oletusnimi", "luokat": [] }
        axios.post('http://localhost:3001/koulut', uusiKoulu)
            .then(function (response) {
                // handle success
                console.log("koulu lisätty ok");
                koulutKopio.push(uusiKoulu)
                setValittuKoulu(undefined)
                setLisääKoulu(false)
                setKoulut(koulutKopio);
     
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
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
                });
        }
        if (lisääKoulu) {
            lisääKoulu_()

        } else {
            if (poistaKoulu) {
                poistaKoulu_()

            } else
                if (päivitäKoulu) {
                    päivitäKoulu_()

                }
        }

    }, [dataNoudettu, päivitäKoulu, poistaKoulu,lisääKoulu])

    console.log("Valittu koulu on:" + valittuKoulu)

    return (<div>{(dataNoudettu == true) && <div>{koulut.map((item, index) => 
        <button key={item.id} onClick={() => { setValittuKoulu(index) }}>Näytä koulu {item.koulunNimi} </button>)}
        <button onClick={() => dispatch({ type: "LISÄÄ_KOULU" })}  >Lisää koulu</button>

        {(valittuKoulu !== undefined) && <div>
            <Koulu                                      koulu={koulut[valittuKoulu]} 
                                                        dispatch={dispatch}
                                                        kouluIndex={valittuKoulu}>
            </Koulu><button onClick={() => dispatch({ type: "POISTA_KOULU" })}   >Poista koulu</button></div>}
    </div>}</div>);
}
export default KouluSovellus;
