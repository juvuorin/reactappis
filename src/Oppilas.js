function Oppilas(p) {
    console.log("Oppilas renderöitiin")
    return (
        <div>
            <div><input type="text" onChange={
                (event)=>p.dispatch({type:"OPPILAAN_NIMI_MUUTTUI",data: {oppilasIndex:p.oppilasIndex, luokkaIndex:p.luokkaIndex,nimi:event.target.value}})}
                value={p.oppilas.nimi}></input></div><button onClick={()=>p.dispatch({type:"POISTA_OPPILAS",data: {oppilasIndex:p.oppilasIndex, luokkaIndex:p.luokkaIndex}})}>Poista oppilas</button>
            <input type="checkbox" onClick={
                ()=>p.dispatch({type:"OPPILAAN_LUKUTAITOTIETO_MUUTTUI",data: {oppilasIndex:p.oppilasIndex, luokkaIndex:p.luokkaIndex}})}
                checked={p.oppilas.osaalukea}></input>
        
        </div>
    );
}


export default Oppilas;