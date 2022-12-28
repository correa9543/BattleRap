import React from "react"
import PropTypes from "prop-types";
import Image from 'next/image'



export const BattleCard = (props) => {

    return(
        <div className="card-container">
            {/* <div className="img-container"> */}
                {/* <Image className="battle-card-img" src={props.picPath} alt="Picture does not work" width={1000} height= {618}/> */}
                {/* <img src={props.picPath} className ="battle-card-img"  alt="Picture does not work"/> */}
            {/* </div> */}
            
            <div className= 'battler-info'>
                <div className="info-background">
                    <div className='name-container info'>
                        <h2>Battler: {props.name}</h2>
                    </div>
                    <div className='numberBattles-container info'>
                        <p>Battles: {parseInt(props.numberBattles)}</p>
                    </div>
                    <div className="views-container info">
                        <p>Views: {parseInt(props.views)}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}