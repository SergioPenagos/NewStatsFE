const minuteHand = "M 0,0 V 35";
const hourHand = "M 0,0 V 15";

const shortminuteHand = "M 0,0 V 25";
const shorthourHand = "M 0,0 V 10";

function Clock(props) {
    const minuteRotation = props.minutes;
    const hourRotation = props.hours;
    const hourRange = props.range;
    const desc = props.desc;
    const descriptionone = props.descriptionone
    const descriptiontwo = props.descriptiontwo
  return (
    <svg width="50%" height="100%">
      <linearGradient id="test" x2="0%" y2="100%">
      <stop offset="5%"  stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
      <g>
        
        <circle
          cx="80"
          cy="80"
          r={desc ? "35" : "40"}
          fill="white"
          stroke="black"
          strokeWidth="1"
          fill-opacity= "0"
        />
        <circle cx="80" cy="80" r="3" />
        <path
          d={desc ? shortminuteHand: minuteHand}
          stroke="grey"
          strokeWidth="1"
          transform={`translate(80,80) rotate(${minuteRotation})`}
        />
        <path
          d={desc ? shorthourHand:hourHand}
          stroke="grey"
          strokeWidth="1"
          transform={`translate(80,80) rotate(${hourRotation})`}
        />
        {!desc ? <text
          y={140}
          x={80}
          textAnchor="middle"
          fill="#444"
          style={{ fontSize: "12px" }}
        >
          {hourRange.length===1 ? (`${hourRange[0]} > `) : (`${hourRange[0]} > ${hourRange[1]}`)}
        </text>: <><text
          y={130}
          x={80}
          textAnchor="middle"
          fill="#444"
          style={{ fontSize: "12px" }}
        >
          {descriptionone}
        </text> <text
          y={145}
          x={80}
          textAnchor="middle"
          fill="#444"
          style={{ fontSize: "12px" }}
        >
          {descriptiontwo}
        </text> </>
        }
      </g>
    </svg>
  );
}

export default Clock;
