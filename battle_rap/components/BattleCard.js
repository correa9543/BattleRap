import React from "react"
import PropTypes from "prop-types";
import Image from 'next/image'


export const BattleCard = (props) => {

    return(
        <div className="card-container" style={{backgroundImage: `url(${props.picPath})`}}>
            <div className= 'battler-info'>
                <div className="info-background">
                    <div className='name-container info'>
                        <h2>{props.name}</h2>
                    </div>
                    <div className='numberBattles-container info'>
                        <h3>Battles: {parseInt(props.numberBattles)}</h3>
                    </div>
                    <div className="views-container info">
                        <h3>Views: {parseInt(props.views)}</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}