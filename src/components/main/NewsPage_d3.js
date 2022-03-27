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

function NewsPageRotate(props) {
  const pageNum = props.pageNum;
  const pageAmount = pageNum.length;
  const description = props.description;
  const secondline = props.secondline;
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
  
  if (!changeScale && pageNum.length !== 1) {
    var initialX = 10;
    var initialY = 200;
    var finalScale = 0.20;
  } else if (!changeScale && pageNum.length === 1) {
    var initialX = 200;
    var initialY = 300;
    var finalScale = 0.20;
  } else if (changeScale && pageNum.length !== 1) {
    switch (scale) {
      case 0.4:
        var initialX = 550;
        var initialY = 900;
        var finalScale = 0.20 * scale;
        break;
      case 0.6:
        var initialX = 300;
        var initialY = 600;
        var finalScale = 0.20 * scale;
        break;
      case 0.8:
        var initialX = 150;
        var initialY = 400;
        var finalScale = 0.20 * scale;
        break;
      case 1:
        var initialX = 40;
        var initialY = 300;
        var finalScale = 0.20 * scale;
        break;
    }
  } else if (changeScale && pageNum.length === 1) {
    switch (scale) {
      case 0.4:
        var initialX = 680;
        var initialY = 900;
        var finalScale = 0.20 * scale;
        break;
      case 0.6:
        var initialX = 420;
        var initialY = 400;
        var finalScale = 0.20 * scale;
        break;
      case 0.8:
        var initialX = 290;
        var initialY = 300;
        var finalScale = 0.20 * scale;
        break;
      case 1:
        var initialX = 220;
        var initialY = 250;
        var finalScale = 0.20 * scale;
        break;
    }
  }
  var initialXOff = [185, 380];
  var initialYOff = 130;
  var xOffset = [0, 185, 380, 185];
  var yOffset = [0, -130, 0, 130];
  if (pageAmount === 2) {
    xOffset.pop();
    xOffset.pop();
    xOffset.pop();
    xOffset.push(210);
    yOffset.push(-100);
  } else if (pageAmount > 4) {
    for (var x = 0; x <= pageAmount - 1; x++) {
      var power = 1;
      if (x % 4 === 1 || x % 4 === 3) {
        xOffset.push(initialXOff[0] / 2 ** power);
      } else if (x % 4 === 2) {
        xOffset.push(initialXOff[1] / 2 ** power);
      } else if (x % 4 === 0) {
        xOffset.push(initialXOff[1] / 2 ** power);
        power += 1;
      }
      yOffset.push((initialYOff / 2 ** power) * (-1) ** power);
    }
  }

  if (countryId === "") {
    return (
      <svg width="50%" height="100%">
        <g>
          {pageNum.map((x, index) => (
            <path
              key={x}
              d={pagePath}
              transform={`scale(${finalScale}) translate(${
                initialX + xOffset[index]
              },${initialY + yOffset[index]})`}
              fill="white"
              stroke="grey"
              strokeWidth="5"
            />
          ))}
          <text
            y={120}
            x={62.5}
            textAnchor="middle"
            fill="#000"
            style={{ fontSize: "12px" }}
          >
            {description}
          </text>
          <text
            y={140}
            x={62.5}
            textAnchor="middle"
            fill="#000"
            style={{ fontSize: "12px" }}
          >
            {secondline}
          </text>
        </g>
      </svg>
    );
  } else {
    return (
      <svg width="50%" height="100%">
        <g>
          {pageNum.map((x, index) => (
            <path
              key={x}
              d={pagePath}
              transform={`scale(${finalScale}) translate(${
                initialX + xOffset[index]
              },${initialY + yOffset[index]})`}
              fill="white"
              stroke="grey"
              strokeWidth="5"
            />
          ))}
          <text
            y={140}
            x={62.5}
            textAnchor="middle"
            fill="#444"
            style={{ fontSize: "10px" }}
          >
            {description}
          </text>
          <circle cx={100} cy={100} r={10} fill={`url(#${countryId})`}></circle>
        </g>
      </svg>
    );
  }
}

export default NewsPageRotate;
