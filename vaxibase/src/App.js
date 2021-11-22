
import './App.css';

import React,{useState,useEffect} from "react"
import CanadaMap from "react-canada-map"
import Popup from 'react-animated-popup'

//import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from './firebase';
import db from './firebase';

//import { doc, getDocs } from "firebase/firestore";


function App() {
  const mapClickHandler = (province, event) => {
    console.log("province clicked: ", province)
  }

  const customizeProvince = () => {
    return {
      ON: {
       
        onHoverColor: "yellow",
       
       
        
      },
      NB: {
        onHoverColor: "orange",
      },
      QC: {
        onHoverColor: "lightblue",
      },
      AB: {
       
        onHoverColor: "blue",
        
      },
      BC: {
        onHoverColor: "darkorange",
      },
      YT: {
        onHoverColor: "purple",
      },
       NT: {
        onHoverColor: "pink",
         
      },
      NL: {
        onHoverColor: "#CBC3E3",
      },
      NS: {
        onHoverColor: "red",
      },
       NU: {
        onHoverColor: "	#FF7F7F",       
      },
      PE: {
        onHoverColor: "green",
      },
      SK: {
        onHoverColor: "orange",
      },
    }
  }

  return (
    <CanadaMap
      customize={customizeProvince()}
      fillColor="ForestGreen"
      onHoverColor="Gold"
      onClick={mapClickHandler}
    ></CanadaMap>
  )
}


export default App
