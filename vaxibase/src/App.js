
import './App.css';

import React, {useState,useEffect} from "react";
import CanadaMap, { Provinces } from "react-canada-map";
import Popup from 'react-animated-popup';
import {db} from 'firebase';

//import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from './firebase';

//import { doc, getDocs } from "firebase/firestore";


function App() {
  const [provinceClicked, setProvinceClicked] = useState("");

  const mapClickHandler = (province, event) => {
    console.log("province clicked: ", province);

    setProvinceClicked(province);

    
    

    setVisible(true);
  }

  
 
  

  const print = (dbRef) =>
  {
    return provinceClicked
  }

  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState(" ")
  

  


  return (
    <div className="page">
        <div className = "map">
            <CanadaMap
              fillColor="green"
              onHoverColor="Blue"
              onClick = {mapClickHandler}
            ></CanadaMap>
        </div>
        <div className = "popup">
            <Popup visible={visible} onClose={() => setVisible(false)}>
                <p>{print()}</p>
            </Popup>
        </div>
    </div>

  )
}


export default App
