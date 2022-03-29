import React from "react";
import NewsPageRotate from "./NewsPage_d3";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import _ from "lodash";

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
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

function ScaleDesc(props) {
  const PPerCapita = props.ppercapita;
  return (
    <div className="container" style={{ padding: "0px" }}>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Visitas per capita</Typography>
            {"Cantidad de visitas en relación con la población del país de procedencia del sitio."}
          </React.Fragment>
        }
      >
        <div className="row mt-5">
        <div className="col md=4 xl=4 d-flex">
      </div>
          <div className="col md=2 xl=2 d-flex justify-content-center">
            <NewsPageRotate
              pageNum={_.range(1)}
              description={round(PPerCapita[0], 3)}
              secondline={"visitas per capita"}
              changeScale={true}
              scale={0.4}
              desc={true}
              country={""}
            />
          </div>
          <div className="col md=2 xl=2 d-flex justify-content-center">
            <NewsPageRotate
              pageNum={_.range(1)}
              description={round(PPerCapita[1], 2)}
              secondline={"visitas per capita"}
              changeScale={true}
              scale={1.0}
              desc={true}
              country={""}
            />
          </div>
          <div className="col md=4 xl=4 d-flex">
      </div>
        </div>
      </HtmlTooltip>
    </div>
  );
}

export default ScaleDesc;
