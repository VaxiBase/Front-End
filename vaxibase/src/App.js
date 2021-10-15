
import './App.css';

import React from "react"
import CanadaMap from "react-canada-map"

function App() {
  const mapClickHandler = (province, event) => {
    alert(province + "  Vaccinations : 25 5040")
  }

 

  return (
    <div className="page">
      <div className = "map">
          <CanadaMap
            fillColor="white"
            onHoverColor="Blue"
            
            onHover={mapClickHandler}
          ></CanadaMap>
      </div>
    </div>

  )
}


export default App
