function Oppilas(p) {


    const poistaOppilas = (index)=>{
//        p.luokka.oppilaat
        p.luokka.oppilaat.splice(index,1)
        p.setKoulu(JSON.parse(JSON.stringify(p.koulu)))

    }

    return (
        <div>
            <div>{p.oppilas.nimi}</div><button onClick={()=>poistaOppilas(p.oppilas.index)}>Poista oppilas</button>
        </div>
    );
}

export default Oppilas;