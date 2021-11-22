
import './App.css';

import React, {useState,useEffect} from "react";
import CanadaMap, { Provinces } from "react-canada-map";
import Popup from 'react-animated-popup';
import {db} from './firebase';

function App() {
  const [provinceClicked, setProvinceClicked] = useState("");

  const mapClickHandler = (province, event) => {
    console.log("province clicked: ", province);

    setProvinceClicked(province);

    db.ref('province_data/' + province).once('value').then(function (snapshot) {
      var name = snapshot.val().name;
      var date = snapshot.val().date;
      var percent_vaccinated_total=snapshot.val().percent_vaccinated_total;
      var population_death=snapshot.val().population_death;
      var total_hospitalizations=snapshot.val().total_hospitalizations;
      var percent_booster_shot=snapshot.val().percent_booster_shot;

      document.getElementById("name").innerHTML=name;
      document.getElementById("date").innerHTML=date;
      document.getElementById("percent_vaccinated_total").innerHTML=percent_vaccinated_total;
      document.getElementById("population_death").innerHTML=population_death;
      document.getElementById("total_hospitalizations").innerHTML=total_hospitalizations;
      document.getElementById("percent_booster_shot").innerHTML=percent_booster_shot;
  })

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
                <p><strong id="name"></strong></p>
                <p><strong id="date"></strong></p>
                <p>Population Vaccinated: <strong id="percent_vaccinated_total">%</strong></p>
                <p>Booster Shots: <strong id="percent_booster_shot">%</strong></p>                
                <p>Current Hospitalizations: <strong id="total_hospitalizations"></strong></p>
                <p>Total Deaths: <strong id="population_death"></strong></p>
            </Popup>
        </div>
    </div>

  )
}


export default App
