
import './App.css';

import React,{useState} from "react"
import CanadaMap from "react-canada-map"
import Popup from 'react-animated-popup'




function App() {

  const mapClickHandler = (province, event) => {
    setMessage(province)
    setVisible(true)
  }

  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState(" ")
 

  return (
    <div className="page">
        <div className = "map">
            <CanadaMap
              fillColor="white"
              onHoverColor="Blue"
              onClick = {mapClickHandler}
            
            ></CanadaMap>
        </div>
        <div className = "popup">
            <Popup visible={visible} onClose={() => setVisible(false)}>
                <p>{message}</p>
            </Popup>
        </div>
    </div>

  )
}


export default App
