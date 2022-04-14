import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import CountriesColors from "./Countries";

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

function CountriesDesc1() {
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          {"Representation of the included countries."}
        </React.Fragment>
      }
    >
      <div className="row mt-5">
        <div className="col md=3 xl=3 d-flex justify-content-center">
          <CountriesColors colorName={"#FFB09E"} country={"Guatemala"} />
        </div>
        <div className="col md=3 xl=3 d-flex justify-content-center">
          <CountriesColors colorName={"#FFB09E"} country={"CostaRica"} />
        </div>
        <div className="col md=3 xl=3 d-flex justify-content-center">
          <CountriesColors colorName={"#FFB09E"} country={"ElSalvador"} />
        </div>
        <div className="col md=3 xl=3 d-flex justify-content-center">
          <CountriesColors colorName={"#FFB09E"} country={"Honduras"} />
        </div>
      </div>
    </HtmlTooltip>
  );
}

export default CountriesDesc1;
