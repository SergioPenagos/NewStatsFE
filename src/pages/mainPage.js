import React from "react";
import Col from "react-bootstrap/Col";
import Title from "../components/main/Title";
import Description from "../components/main/Description";
import Clock from "../components/main/Clock";
import Scale from "../components/main/scale";
import CountriesDesc1 from "../components/main/CountriesDesc1";
import CountriesDesc2 from "../components/main/CountriesDesc2";
import ScaleDesc from "../components/main/ScaleDesc";
import { serverAddress } from "../components/Consts";
import TimeZones from "../components/TimeZones";
import { useEffect, useState } from "react";
import { BoxLoading } from 'react-loadingg';


const centerStyle = {
  display: "flex",
  justifyContent: "center",
  verticalAlign: "baseline",
  alignItems: "center",
  width: "..",
  height: "..",
};

const allStyle = {
  width: "1090px",
  margin: "auto"
}

function MainPage() {
  const [siteData, setSiteData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [maxPViews, setMaxPViews] = useState(0);
  const [minPViews, setMinPViews] = useState(0);
  const [pPerCapita, setPPerCapita] = useState([]);
  const getData = () => {
    fetch(serverAddress + "/database/ranges", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.data)
        setSiteData(myJson);
        setMaxPViews(myJson.max_pagev);
        setMinPViews(myJson.min_pagev);
        setPPerCapita([myJson.min_visits, myJson.max_visits]);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <BoxLoading color={"#80abd9"}/>
    );
  }

  return (
    <div className="all" style={allStyle}>
      <Title id="title" />
      <Description />
      <div className="container">
      <div className="row mt-5" style={centerStyle}>
      <div className="col md=5 xl=5 "> </div>
        <div className="col md=2 xl=2 d-flex justify-content-center" >
          <Clock minutes={180 + 30} hours={-90} desc={true} descriptionone={"Segundos promedio"} descriptiontwo={"por visita"} />
        
        </div>
        <div className="col md=5 xl=5 "></div>
      
    
      </div>
      </div>
      <Scale minviews={minPViews} maxviews={maxPViews} />
      <Col md={2} xl={2} className="d-flex justify-content-center"></Col>
      <ScaleDesc ppercapita={pPerCapita} />

      <CountriesDesc1 />

      <CountriesDesc2 />
      <TimeZones data={siteData} />
    </div>
  );
}

export default MainPage;
