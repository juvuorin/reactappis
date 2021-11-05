import Oppilas from './Oppilas';
//useReducer Context API 
function Luokka(p) {
//    console.log(p)
    console.log("Luokka renderöitiin")
   
    return (<div><div>{p.luokka.kirjain}{p.numero}</div>{p.luokka.oppilaat.map(
        (oppilas,index) => <Oppilas luokka={p.luokka} oppilas={oppilas} dispatch={p.dispatch} luokkaIndex={p.luokkaIndex} oppilasIndex={index} koulu={p.koulu}/>)}

        <button onClick={()=>p.dispatch( {type:"LISÄÄ_OPPILAS",data: {luokkaIndex:p.luokkaIndex}})}>Lisää oppilas</button>
    </div>);
}
export default Luokka;

