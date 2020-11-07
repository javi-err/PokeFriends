import React from 'react'
import './card.scss'

const BackCard = () => {
    return (
        <div className={`container bg-light-blue shadow-4 grow`}>

            <div className="pokemon-stats">
                <div className="stat-container">
                    <div className="stat-label">HP: 45</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level hp" 
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width : "44%"}}></div>
                    </div>
                   
                </div>

                <div className="stat-container">
                    <div className="stat-label">Attack: 49</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level atk" 
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width : "44%"}}></div>
                    </div>
                   
                </div>

                <div className="stat-container">
                    <div className="stat-label">Defense: 49</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level def"
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width : "44%"}}></div>
                    </div>
                    
                </div>

                <div className="stat-container">
                    <div className="stat-label">Special Attack: 65</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level spatk"
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width : "44%"}}></div>
                    </div>
                    
                </div>

                <div className="stat-container">
                    <div className="stat-label">Special Defense: 45</div>
                    <div className="stat-bar-container"> 
                    <div className="stat-bar-level spdef"
                    style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width : "44%"}}></div>
                </div>
                   
                </div>

                <div className="stat-container">
                    <div className="stat-label">Speed: 45</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level spdef"
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width : "44%"}}></div>
                    </div>
                   
                </div>

                <div className="stat-container">
                    <div className="stat-label">Total: 318</div>
                    <div className="stat-bar-container">
                        <div className="stat-bar-level total"
                        style={{backgroundColor: "red",  padding: ".6rem", borderRadius: ".5rem", width : "44%"}}></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default BackCard;