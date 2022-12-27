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

    return (
        <> 
            <div> 
                <Header/>
                <Coverphoto/>
            </div>
        </>
    )
}

export default LandingPage;