import { useContext } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { userData } from '../../CommanUtils/Context';
import "./Header.css"

const Header = ()=>{
const {setIsDrawerOpen} = useContext(userData)

    return(
        <>
        <div className="HeaderContainer" style={{height:"10vh"}}>
            <div style={{width:"100%"}}>
            <img className="logoimage" src="spacex-logo-big.png" alt="spacex logo"/>
            </div>
            <div className="spanConainer">
            <span>FALCON 9</span>
            <span>FALCON HEAVY</span>
            <span>DRAGON</span>
            <span>STARSHIP</span>
            <span>HUMAN SPACEFLIGHT</span>
            <span>RIDESHARE</span>
            <span>RIDESHARE</span>
            <span>ORDER STARLINK</span>
            </div>
            <div classname="headerIcon">
            <DehazeIcon style={{marginTop:"8.3vh",marginLeft:"15%"}} onClick={()=>{setIsDrawerOpen(true)}}/>
            </div>
        </div>
        </>
    )
}

export default Header;