import { useState } from "react";
import "./Filter.css"


const Filter = () => {
    const [valorHora, setValorHora] = useState(0)
    const [valorMedio, setValorMedio] = useState(0)
    const [filteOnline, setfilteOnline] = useState(false)
    const [btnAction, setBtnAction] = useState({
        face: false,
        nativo: false,
        precos: false,
        tempresp: false,
        nivel: false,

    })


    const handleBtn = async (btn) => {
        let keys = Object.keys(btnAction)
        let btns = btnAction
        let valor = !btnAction[btn]



        await keys.forEach((index) => {
            btns[index] = false
        })



        setBtnAction({
            ...btns,
            [btn]: valor
        })

    }

    return (
        <>
            <div className="filter">

                <div className="container">
                    <div className="row">
                        <div className="col text-start">
                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={() => handleBtn("face")}>Face a face</button>
                                <div className={btnAction.face === false ? "div-flutuante" : "div-flutuante aberto"}>

                                    <div className="aba-face">
                                        <h2 onClick={(e) => setfilteOnline(false)} className={filteOnline === false ? "face check" : "face"}></h2>
                                        <h2 onClick={(e) => setfilteOnline(true)} className={filteOnline === false ? "online" : "online check"}></h2>
                                    </div>

                                </div>

                            </div>

                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={() => handleBtn("nativo")}>Nativos</button>
                                <div className={btnAction.nativo === false ? "div-flutuante" : "div-flutuante aberto"}>

                                    <div className="aba-nativo">

                                        <div className="form-check form-switch">
                                            <label className="form-check-label" for="flexSwitchCheckDefault">Ver somente professores nativos</label>
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        </div>

                                        <button className="btn btn-outline-primary">confirmar</button>
                                    </div>


                                </div>

                            </div>

                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={() => handleBtn("precos")}>precos</button>
                                <div className={btnAction.precos === false ? "div-flutuante" : "div-flutuante aberto"}>

                                    <div className="aba-preco">
                                        <p>precos medio R${valorHora},00</p>
                                        <h5>seu orçamento R${valorMedio}</h5>
                                        <input type="range" class="form-range" id="customRange1"></input>
                                        <div className="form-check form-switch">
                                            <label className="form-check-label" for="flexSwitchCheckDefault">Ver somente professores nativos</label>
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={() => handleBtn("tempresp")}>tempo de resposta</button>
                                <div className={btnAction.tempresp === false ? "div-flutuante" : "div-flutuante aberto"}>
                                    <h2>tempo de resposta</h2>
                                    <button></button>
                                </div>

                            </div>

                            <div className="btn-flutuante">
                                <button className="bnt-action" onClick={() => handleBtn("nivel")}>nivel</button>
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