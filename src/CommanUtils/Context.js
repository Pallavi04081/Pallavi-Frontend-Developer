
import {createContext,useState,children} from 'react'
export const userData = createContext();


const Context = ({children})=>{
    const[RocketData,setRocketData] = useState([]);
    const[searchedInput,setSearchedInput] = useState("")
    const[isdrawerOpen,setIsDrawerOpen] = useState(false)

     return(
       <>
      <userData.Provider  value={{
        RocketData,
        setRocketData,
        searchedInput,
        setSearchedInput,
        isdrawerOpen,
        setIsDrawerOpen
        
    }}>
         {children}
      </userData.Provider>
       </>
     )
}


export default  Context;



