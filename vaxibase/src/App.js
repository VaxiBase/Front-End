
import './App.css';

import React, {useState,useEffect} from "react";
import CanadaMap, { Provinces } from "react-canada-map";
import Popup from 'react-animated-popup';
import {db} from './firebase';


import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  const [visible, setVisible] = useState(false)
  const [provinceData, setProvinceData] = useState("")

  db.ref('province_data').once('value').then(function (snapshot) {
    localStorage.setItem("provinceData", JSON.stringify(snapshot.val()))
  })

  const mapClickHandler = (province, event) => {
    var data = JSON.parse(localStorage.getItem("provinceData"));
    setProvinceData(data[province]);
    
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

  useEffect(() => {

  })

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
                <p><strong>{provinceData.name}</strong></p>
                <p>Updated: <strong>{provinceData.date}</strong></p>
                <p>Population Fully Vaccinated: <strong>{provinceData.percent_vaccinated_total}</strong>%</p>
                <p>Population With Booster Shots: <strong>{provinceData.percent_booster_total}</strong>%</p>   
                <p>Total doses administered: <strong>{provinceData.total_vaccinations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong></p>     
                <p>Total Cases: <strong>{provinceData.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong></p>        
                <p>Current Hospitalizations: <strong>{provinceData.total_hospitalizations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong></p>
                <p>Total Deaths: <strong>{provinceData.total_fatalities.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong></p>
            </Popup>
        </div>
    </div>

  )
}


export default App
