import React from "react";
import NewsPageRotate from "./NewsPage_d3";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import _ from "lodash";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

function Scale(props) {
  const minPViews = props.minviews
  const maxPViews = props.maxviews

  return (
    <div className="container" style={{padding:"0px"}}>
     <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Articles per visit</Typography>
            {"Amount of articles read by an average reader"}
          </React.Fragment>
        }
      >
    <div className="row mt-5">
      <div className="col md=2 xl=2 d-flex">
      </div>
      <div className="col md=2 xl=2 d-flex justify-content-center">
        <NewsPageRotate
          pageNum={_.range(Math.round(minPViews))}
          secondline={Math.round(minPViews) + " articles read"}
          changeScale={false}
          scale={1}
          desc={true}
          country={""}
        />
      </div>
      <div className="col md=2 xl=2 d-flex justify-content-center">
        <NewsPageRotate
          pageNum={_.range(Math.round(maxPViews))}
          secondline={Math.round(maxPViews) + " articles read"}
          changeScale={false}
          scale={1}
          desc={true}
          country={""}
        />
      </div>
      <div className="col md=2 xl=2 d-flex"></div>
    </div>
    </HtmlTooltip>
    </div>
  );
}

export default Scale;
