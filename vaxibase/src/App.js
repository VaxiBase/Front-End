
import './App.css';

import React,{useState,useEffect} from "react"
import CanadaMap from "react-canada-map"
import Popup from 'react-animated-popup'

//import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from './firebase';

//import { doc, getDocs } from "firebase/firestore";


function App() {

 

  const mapClickHandler = (province, event) => {
   
    

   

    try {
  
    
      
    } catch (e) {
      
    }

    setVisible(true)
    

  }

  
 
  

  const print = (dbRef) =>
  {
    return "123"
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
