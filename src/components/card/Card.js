


import React from 'react'

export const Card = ({prof}) => {
    return (

        <div className='card'>
            <div className='img-prof'style={{ backgroundImage: `url(${prof.img})` }} > 
                <h4>{prof.nome}</h4>
                <p>{prof.online ? "online" : "offline" }</p>
            </div>
            <div className='primeiro-detalhe'>
                <h3> <i className="fas fa-star"></i> {prof.rating}</h3>
                <h3> <i className="fas fa-star"></i> {prof.nivel}</h3>
            </div>
            <div className='desc-prof'>
                <p>{prof.descPrincipal}</p>
            </div>
            <div className='tags-prof'>
                <span>R${prof.preco}</span>
                <span> {prof.nativo ? "é nativo" : "nao é nativo" }</span>
            </div>

        </div>
    )
}

