import { useState } from "react";
import "./Filter.css"

const Filter = () => {

const [btnAction, setBtnAction] = useState({
    face: false,
    nativo : false,
    precos : false,
    tempresp : false,
    nivel : false,       

})

const handleBtn= (btn) =>{ 

    let btnAntes = btnAction
    let valor = !btnAction[btn]

    btnAntes.face = false;
    btnAntes.nativo = false

    btnAntes[btn] =valor
    setBtnAction({...btnAntes})

}

    return (
        <>
            <div className="filter">

                <div className="container">
                    <div className="row">
                        <div className="col text-start">
                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={()=> handleBtn("face")}>Face a face</button>
                                <div className={btnAction.face === false ? "div-flutuante" : "div-flutuante aberto"}>
                                    <h2>face a face</h2>
                                    <h2>online</h2>
                                </div>

                            </div>

                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={()=> handleBtn("nativo")}>Nativos</button>
                                <div className={btnAction.nativo === false ? "div-flutuante" : "div-flutuante aberto"}>
                                    <h2>Nativos</h2>
                                    <button></button>
                                </div>

                            </div>

                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={()=> handleBtn("precos")}>precos</button>
                                <div className={btnAction.precos === false ? "div-flutuante" : "div-flutuante aberto"}>
                                    <h2>precos</h2>
                                    <button></button>
                                </div>

                            </div>

                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={()=> handleBtn("tempresp")}>tempo de resposta</button>
                                <div className={btnAction.tempresp === false ? "div-flutuante" : "div-flutuante aberto"}>
                                    <h2>tempo de resposta</h2>
                                    <button></button>
                                </div>

                            </div>

                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={()=> handleBtn("nivel")}>nivel</button>
                                <div className={btnAction.nivel === false ? "div-flutuante" : "div-flutuante aberto"}>
                                    <h2>nivel</h2>
                                    <button></button>
                                </div>

                            </div>

                        </div>

                        

                    </div>

                </div>



            </div>


        </>

    )

}
export default Filter;