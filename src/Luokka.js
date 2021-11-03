import Oppilas from './Oppilas';

function Luokka(p) {
    console.log(p)

    const lisääOppilas = ()=>{
        p.luokka.oppilaat.push({nimi: "Olli Oppilas"})
//        p.setKoulu(JSON.parse(JSON.stringify(p.koulu)))
        p.setKoulu({...p.koulu})

    }
    return (<div><div>{p.luokka.kirjain}{p.numero}</div>{p.luokka.oppilaat.map((oppilas,index) => <Oppilas luokka={p.luokka} oppilas={oppilas} index={index} setKoulu={p.setKoulu} koulu={p.koulu}/>)}

        <button onClick={lisääOppilas}>Lisää oppilas</button>

    </div>


    );
}
export default Luokka;

