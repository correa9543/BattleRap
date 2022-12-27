import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Navbar} from '../components/Navbar.js'
import { BattleCard } from '../components/BattleCard'

export const Battlers = () => {
    return(
        <>
            <BattleCard picPath="/Users/Cheezy/Desktop/BattleRapApp/battle_rap/private/jesus.jpeg" name="Jesus" views="390" numberBattles ="4"></BattleCard>
        </>
        

    );
}

export default Battlers;
