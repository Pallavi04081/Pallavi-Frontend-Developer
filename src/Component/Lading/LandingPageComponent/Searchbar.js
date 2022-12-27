import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

const Searchbar = ({setSearchedInput})=>{
 
    const[input,setInput] = useState("")
     
    useEffect(()=>{
      if(!input){
        setSearchedInput("")
      }
    },[input])


    return(
        <>
        <div className="searchbar">
                        <div class="search-box" onClick={()=>{setSearchedInput(input)}}>
                            <input type="text" placeholder="search..." onChange={(e)=>{setInput(e.target.value)}}/>
                            <div class="icon" >
                                <SearchIcon fontSize='small' style={{ width: "20px" }}/>
                            </div>
                 </div>
        </div>
        </>
    )
}

export default Searchbar