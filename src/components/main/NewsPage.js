import React from "react";
import {
  Guatemala,
  CostaRica,
  Salvador,
  Honduras,
  Nicaragua,
  Panama,
} from "./Flags/Flags";

const pagePath =
  "M 10 10 C 50,30 90,-5 100,10 C 110,-5 149,30 180,10 L 195,110 C 200,125 120,70 100,110 C 90,70 50,125 5,110 L 10,10 M 100, 10 V 110";

function NewsPage(props) {
  const pageNum = props.pageNum;
  const pageAmount = pageNum.length;
  const description = props.description;
  const changeScale = props.changeScale;
  const scale = props.scale;
  const countryId = props.country;

  function countryFlag(countryId) {
    switch (countryId) {
      case "Guatemala":
        return [<Guatemala country={countryId} />, "Guatemala"];
      case "CostaRica":
        return [<CostaRica country={countryId} />, "Costa Rica"];
      case "ElSalvador":
        return [<Salvador country={countryId} />, "El Salvador"];
      case "Honduras":
        return [<Honduras country={countryId} />, "Honduras"];
      case "Nicaragua":
        return [<Nicaragua country={countryId} />, "Nicaragua"];
      case "Panama":
        return [<Panama country={countryId} />, "Panamá"];
    }
  }

  if (!changeScale) {
    var initialX = 60 - 8 * pageAmount;
    var initialY = 60 + 5 * pageAmount;
    var finalScale = 0.5;
  } else if (scale != 1) {
    switch (scale) {
      case 0.4:
        var initialScaleX = 0.5;
        var initialScaleY = 0.3;
        break;
      case 0.6:
        var initialScaleX = 0.6;
        var initialScaleY = 0.4;
        break;
      case 0.8:
        var initialScaleX = 0.8;
        var initialScaleY = 0.5;
        break;
    }
    var initialX = 60 * (1 / (scale * initialScaleX)) - 8 * pageAmount;
    var initialY = 40 * (1 / (scale * initialScaleY)) + 5 * pageAmount;
    var finalScale = 0.5 * scale;
  } else if (scale === 1){
    var initialX = 60 - 8 * pageAmount;
    var initialY = 60 + 5 * pageAmount;
    var finalScale = 0.5;
  }

  if (countryId === "") {
    return (
      <svg width="100%" height="100%">
        <g>
          {pageNum.map((x) => (
            <path
              key={x}
              d={pagePath}
              transform={`scale(${finalScale}) translate(${initialX + 8 * x},${
                initialY - 5 * x
              }) `}
              fill="white"
              stroke="grey"
              strokeWidth="3"
            />
          ))}
          <text
            y={150}
            x={80}
            textAnchor="middle"
            fill="#444"
            style={{ fontSize: "12px" }}
          >
            {description}
          </text>
        </g>
      </svg>
    );
  } else { return(
    <svg width="100%" height="100%">
      <g>
        {pageNum.map((x) => (
          <path
            key={x}
            d={pagePath}
            transform={`scale(${finalScale}) translate(${initialX + 8 * x},${
              initialY - 5 * x
            }) `}
            fill="white"
            stroke="grey"
            strokeWidth="3"
          />
        ))}
        <text
          y={140}
          x={80}
          textAnchor="middle"
          fill="#444"
          style={{ fontSize: "12px" }}
        >
          {description}
        </text>
        <circle cx={130} cy={100} r={10} fill={`url(#${countryId})`}></circle>
      </g>
    </svg>);
  }
}

export default NewsPage;
