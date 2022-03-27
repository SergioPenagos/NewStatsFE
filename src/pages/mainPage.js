import React from "react";
import Col from "react-bootstrap/Col";
import Title from "../components/main/Title";
import Description from "../components/main/Description";
import Clock from "../components/main/Clock";
import Scale from "../components/main/scale";
import CountriesDesc1 from "../components/main/CountriesDesc1";
import CountriesDesc2 from "../components/main/CountriesDesc2";
import ScaleDesc from "../components/main/ScaleDesc";
import _ from "lodash";
import { serverAddress } from "../components/Consts";
import TimeZones from "../components/TimeZones";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
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


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

function MainPage() {
  const [siteData, setSiteData] = useState({});
  const [sites, setSites] = useState({});
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
        console.log(myJson.max_pagev);
        setSiteData(myJson);
        setMaxPViews(myJson.max_pagev);
        setMinPViews(myJson.min_pagev);
        setPPerCapita([myJson.min_visits, myJson.max_visits]);
        setSites(siteData.data);
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
    <div className="all">
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
