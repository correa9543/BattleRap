import React from "react"
import PropTypes from "prop-types";

export const BattleCard = (props) => {

    return(
        <div className="card-container">
            <div className="img-container">
                <img className ="battle-card-img" src={props.picPath} alt="" />
            </div>
            <div className='name-container'>
                <h2>Battler: {props.name}</h2>
            </div>
            <div className="numberBattles-container">
                <p>Battles: {parseInt(props.numberBattles)}</p>
            </div>
            <div className="views-container">
                <p>Views: {parseInt(props.views)}</p>
            </div>
        </div>
    )
}