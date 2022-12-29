import {useRouter} from 'next/router'
// import '../styles/nav-bar.css'


export const Navbar = () => {
    const router = useRouter();

    return(
        <>
            <link href='https://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'></link>
                <h1>Battle Rap</h1>
                <a onClick={() => router.push('/')} className="btn">Home</a>
                <a onClick={() => router.push('/battlers')} className="btn">Battlers</a>
                <a href="#" className="btn">Bars</a>
                <a href="#" className="btn">Sign In</a>
        </>
    )
}