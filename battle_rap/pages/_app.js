import '../styles/globals.css'
import '../styles/nav-bar.css'
import '../styles/BattleCard.css'
import { Navbar } from '../components/Navbar'


export default function App({ Component, pageProps }) {

  return(
    <>
    <Navbar></Navbar>
    <Component {...pageProps} />
    </>

  ) 
}
