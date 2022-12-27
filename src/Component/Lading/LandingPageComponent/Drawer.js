import { Drawer } from "@mui/material"
import { useContext } from 'react';
import { userData } from '../../../CommanUtils/Context';

const DrawerComponent = ()=>{
    const {isdrawerOpen,setIsDrawerOpen} = useContext(userData)
       console.log(isdrawerOpen)
    return(
        <>
    <Drawer
      anchor='right'
      open={isdrawerOpen}
      onClose={()=>{setIsDrawerOpen(false)}}
      backgroundColor="black"
    >
    <div style={{width:"200px",backgroundColor:"black",height:"100%"}}>
      <ul style={{marginTop:"50px",listStyle:"none"}}>
        <li className="liComponent">FALCON 9</li>
        <li  className="liComponent">FALCON HEAVY</li>
        <li  className="liComponent">DRAGON</li>
        <li  className="liComponent">STARSHIP</li>
        <li  className="liComponent">HUMAN SPACEFLIGHT</li>
        <li  className="liComponent">RIDESHARE</li>
        <li  className="liComponent">RIDESHARE</li>
        <li  className="liComponent">ORDER STARLINK</li>
      </ul>
    </div>
    </Drawer>
      </>
    )

}

export default DrawerComponent;
