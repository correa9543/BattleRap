import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar.js'
import { BattleCard } from '../components/BattleCard.js'

export const Battlers = () => {
    return(
        <div className='battleCards-container'>
            <BattleCard picPath='/jesus.png' name="Jesus" views="390" numberBattles ="4"/>
            <BattleCard picPath='/banana.jpeg' name="Banana" views="490" numberBattles ="4"/>
        </div>
    );
}

export default Battlers;
