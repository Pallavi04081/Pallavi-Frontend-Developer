import { createContext,useState } from 'react';
import './App.css';
import LandingPage from './Component/Lading/Ladingpage';
import Context from './CommanUtils/Context';


function App() {
  return (
    <Context>
     <LandingPage/>
     </Context>
  );
}

export default App;
