import React from 'react'
import './card.scss'


const Card = ({name, id, color, type}) => {
    return (
        <div className={`container bg-light-${color} shadow-4 grow`}>
            <div>
        <div className="image-container">
            <img src={`https://ptgigi.com/pkmn/img/3d/${name}.gif`} alt="a"/>
            </div>
        <div className="info-container">
                <h2>{name[0].toUpperCase() + name.slice(1)}</h2>
                <p>#{id}</p> 
                <p>Type: {type}</p>
        </div>
            </div>
        </div>
    )
}

export default Card;