function Oppilas(p) {
    console.log("Oppilas renderöitiin")
    
    return (
        <div>
            <div>{p.oppilas.nimi}</div><button onClick={()=>p.dispatch({type:"POISTA_OPPILAS",data: {oppilasIndex:p.oppilasIndex, luokkaIndex:p.luokkaIndex}})}>Poista oppilas</button>
        </div>
    );
}


export default Oppilas;