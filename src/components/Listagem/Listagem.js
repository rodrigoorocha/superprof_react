import React, { useState } from 'react'
import { useEffect } from 'react'
import submitApi from '../../adapter/submitApi'
import { Card } from '../card/Card'

export const Listagem = () => {

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        submitApi("profs", "GET", null).then(profs => {
            setProfessores(profs)
            console.log(profs)
            
        })

    }, [])


    return (
        <div className="listagem">
            <h2>22567 professores de inglês</h2>
            <div className="profs">
                {professores && professores.map(p=>{
                        return <Card prof={p} key={p.id}></Card>
                    }) 
                }
            </div>
        </div>
    )
}
