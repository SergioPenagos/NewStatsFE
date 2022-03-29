import NewsPageRotate from "./main/NewsPage_d3";
import Clock from "../components/main/Clock";
import _ from "lodash";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  verticalAlign: "baseline",
  alignItems: "center",
  width: "..",
  height: "..",
};

function TimeZones(props) {
  const data = props.data
  const sites = data.data
  const times = data.time_zones
  const update = data.last_updated
  const divref = useRef(null);
  let components = [];
  let scaleDomain = [];
  sites.forEach((site) => {
    scaleDomain.push(parseFloat(site.visits));})
  let quantizeScale = d3
    .scaleQuantize()
    .domain([Math.min(...scaleDomain), Math.max(...scaleDomain)])
    .range([0.4, 0.6, 0.8, 1.0]);
  
    useEffect(() => {
      console.log('width', divref.current ? divref.current.offsetWidth : 0);
    }, []);

  times.forEach(function callback(time, index) {
    var innerComps = [];
    var ranges = [];
    if (index + 1 === times.length) {
      ranges.push(time);
    } else {
      ranges.push(times[index]);
      ranges.push(times[index + 1]);
    }
    innerComps.push(
      React.createElement(
        "div",
        { key:time, className: "col md=2 xl=2 d-flex justify-content-center" },
        <Clock minutes={180 + 30*index} hours={-90} range={ranges} desc={false} />
      )
    );
    sites.forEach((site) => {
      if (time === site.time_zone) {
        innerComps.push(
          React.createElement(
            "div",
            { key:site.site_name, className:"col md=2 xl=2 d-flex justify-content-center" , ref: divref},
            <a href={"http://www."+ site.site_url} target={"_blank"}  rel="noreferrer">
            <NewsPageRotate
              pageNum={_.range(Math.round(site.page_views))}
              description={site.site_name}
              changeScale={true}
              scale={quantizeScale(site.visits)}
              desc={true}
              country={site.country_code}
              divwidth={divref.current ? divref.current.offsetWidth : 0}
            />
            </a>
          )
        );
      }
    });
    components.push(
      React.createElement("div", { className: "row mt-5" }, innerComps)
    );
  });
  components.push(
    React.createElement("div", { className: "row mt-5", style:centerStyle}, <p>Última actualización: {update} </p>)
  );

  return <>{components}</>;
}

export default TimeZones;
