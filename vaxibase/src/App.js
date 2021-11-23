
import './App.css';

import React, {useState,useEffect} from "react";
import CanadaMap, { Provinces } from "react-canada-map";
import Popup from 'react-animated-popup';
import {db} from './firebase';


import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  const [provinceClicked, setProvinceClicked] = useState("");
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState(" ")

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
        onHoverColor: "#FF7F7F",    
      },
      PE: {
        onHoverColor: "green",
      },
      SK: {
        onHoverColor: "orange",
      },
       MB: {
        onHoverColor: "lightgreen",
      },
    }
  }

  return (
    <div className="page">

      <div className = "sideb">
      <SideNav
        onSelect={(selected) => {
          if(selected=="home"){
          window.open("https://google.ca", "_blank")
          }

          if(selected=="charts")
          {
            window.open("https://github.com", "_blank")
          }
            
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    API
                </NavText>
            </NavItem>

            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    GITHUB
                </NavText>
                
                </NavItem>
           
        </SideNav.Nav>
</SideNav>
      </div>

      

        <div className = "map">
        <CanadaMap
          customize={customizeProvince()}
          fillColor="ForestGreen"
          onHoverColor="Gold"
          onClick={mapClickHandler}
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
