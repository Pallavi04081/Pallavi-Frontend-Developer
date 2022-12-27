import { useState,useEffect,useContext} from 'react';
import axios from 'axios'
import 'reactjs-popup/dist/index.css';
import Header from '../Header/Header';
import Coverphoto from './LandingPageComponent/CoverPhoto';
import Searchbar from './LandingPageComponent/Searchbar';
import Datagrid from './LandingPageComponent/Datagrid';
import {userData}  from '../../CommanUtils/Context'
import  DrawerComponent from './LandingPageComponent/Drawer'
import "./LandingPage.css"


const LandingPage = () => {
 const {RocketData,setRocketData}  = useContext(userData)
  const[searchedInput,setSearchedInput] = useState("")
 
  
   useEffect(()=>{
        const getRocketData = async()=>{
            const Responce = await axios.get(`https://api.spacexdata.com/v3/rockets/${searchedInput}`)
            Array.isArray(Responce.data)?setRocketData(Responce.data):setRocketData([Responce.data])
        }
        getRocketData();
   },[searchedInput])

    return (
        <> 
            <div> 
                <Header/>
                <Coverphoto/>
                <div>
                    <Searchbar setSearchedInput={setSearchedInput}/>
                </div>
            </div>
        </>
    )
}

export default LandingPage;