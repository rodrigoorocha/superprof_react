import "./Buscador.css"

const Buscador = () => {
    


    return(
   
    
        <div className="caixaBuscador">
            <div className="nomeProf" >
                <input type="text" placeholder="digite nome do professor..."/>
            </div>
            <div className="localProf">
            <input type="text" placeholder="digite local que deseja"/>
            </div>
            <button className="btnEnviaProf">Procurar</button>
        </div>
    )
}

export default Buscador