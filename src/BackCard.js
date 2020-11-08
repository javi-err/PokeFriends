import React from 'react'
import './card.scss'

const BackCard = ({hp, atk, def, spatk, spdef, spd, total}) => {


    return (

        <div className={`container bg-light-blue shadow-4 grow`}>

            <div className="pokemon-stats">
                <div className="stat-container">
                    <div className="stat-label">HP: {hp}</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level hp" 
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width: `${Math.floor((hp / 255) * 100)}%`}}></div>
                    </div>
                   
                </div>

                <div className="stat-container">
                    <div className="stat-label">Attack: {atk}</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level atk" 
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width : `${Math.floor((atk / 255) * 100)}%`}}></div>
                    </div>
                   
                </div>

                <div className="stat-container">
                    <div className="stat-label">Defense: {def}</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level def"
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width:`${Math.floor((def / 255) * 100)}%`}}></div>
                    </div>
                    
                </div>

                <div className="stat-container">
                    <div className="stat-label">Special Attack: {spatk}</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level spatk"
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width:`${Math.floor((spatk / 255) * 100)}%`}}></div>
                    </div>
                    
                </div>

                <div className="stat-container">
                    <div className="stat-label">Special Defense: {spdef}</div>
                    <div className="stat-bar-container"> 
                    <div className="stat-bar-level spdef"
                    style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width:`${Math.floor((spdef / 255) * 100)}%`}}></div>
                </div>
                   
                </div>

                <div className="stat-container">
                    <div className="stat-label">Speed: {spd}</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level spdef"
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width:`${Math.floor((spd / 255) * 100)}%`}}></div>
                    </div>
                   
                </div>

                <div className="stat-container">
                    <div className="stat-label">Total: {total}</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level total"
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width:`${Math.floor((def / 1530) * 100)}%`}}></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default BackCard;