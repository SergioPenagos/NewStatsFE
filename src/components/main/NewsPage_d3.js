import React from "react";

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
  
  var initialX;
  var initialY;
  var finalScale;

  if (!changeScale && pageNum.length !== 1) {
    initialX = 10;
    initialY = 200;
    finalScale = 0.20;
  } else if (!changeScale && pageNum.length === 1) {
    initialX = 200;
    initialY = 300;
    finalScale = 0.20;
  } else if (changeScale && pageNum.length !== 1) {
    switch (scale) {
      case 0.4:
        initialX = 550;
        initialY = 900;
        finalScale = 0.20 * scale;
        break;
      case 0.6:
        initialX = 300;
        initialY = 600;
        finalScale = 0.20 * scale;
        break;
      case 0.8:
        initialX = 150;
        initialY = 400;
        finalScale = 0.20 * scale;
        break;
      case 1:
        initialX = 40;
        initialY = 300;
        finalScale = 0.20 * scale;
        break;
      default:
        initialX = 40;
        initialY = 300;
        finalScale = 0.20 * scale;
        break;

    }
  } else if (changeScale && pageNum.length === 1) {
    switch (scale) {
      case 0.4:
        initialX = 680;
        initialY = 900;
        finalScale = 0.20 * scale;
        break;
      case 0.6:
        initialX = 420;
        initialY = 400;
        finalScale = 0.20 * scale;
        break;
      case 0.8:
        initialX = 290;
        initialY = 300;
        finalScale = 0.20 * scale;
        break;
      case 1:
        initialX = 220;
        initialY = 250;
        finalScale = 0.20 * scale;
        break;
      default:
        initialX = 220;
        initialY = 250;
        finalScale = 0.20 * scale;
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
