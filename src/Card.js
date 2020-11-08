import React from 'react'
import './card.scss'


const Card = ({name, id, color, type, ability, imgURL}) => {
    return (
        <div className={`container bg-light-${color} shadow-4 grow`}>
            <div>
        <div className="image-container">
            <img src={imgURL} alt="a"></img>
            </div>
        <div className="info-container">
                <h2>{name[0].toUpperCase() + name.slice(1)}</h2>
                <p>#{id}</p> 
                <p>Type: {type}</p>
                <p>Ability: {ability}</p>
        </div>
            </div>
        </div>
    )
}

export default Card;

