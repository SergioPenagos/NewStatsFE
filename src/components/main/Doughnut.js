import { Doughnut } from "react-chartjs-2";
import React, { useState, useEffect, useCallback } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const socialsColors = {
  Twitter: {
    "bg-color": "rgba(29, 161, 242, 0.2)",
    "ln-color": "rgba(29, 161, 242, 1)",
  },
  Facebook: {
    "bg-color": "rgba(66, 103, 178, 0.2)",
    "ln-color": "rgba(66, 103, 178, 1)",
  },
  "WhatsApp Webapp": {
    "bg-color": "rgba(37, 211, 102, 0.2)",
    "ln-color": "rgba(37, 211, 102, 1)",
  },
  Linkedin: {
    "bg-color": "rgba(0, 114, 177, 0.2)",
    "ln-color": "rgba(0, 114, 177, 1)",
  },
  Youtube: {
    "bg-color": "rgba(255, 0, 0, 0.2)",
    "ln-color": "rgba(255, 0, 0, 1)",
  },
  Reddit: {
    "bg-color": "rgba(255, 86, 0, 0.2)",
    "ln-color": "rgba(255, 86, 0, 1)",
  },
  Instagram: {
    "bg-color": "rgba(225, 48, 108, 0.2)",
    "ln-color": "rgba(225, 48, 108, 1)",
  },
  Default: {
    "bg-color": "rgba(128, 128, 128, 0.2)",
    "ln-color": "rgba(128, 128, 128, 1)",
  },
};

const backColorsDef = (socials) => {
  console.log(socials);
  var colors = [];
  socials.forEach((name) => {
    try {
      colors.push(socialsColors[name]["bg-color"]);
    } catch {
      colors.push(socialsColors["Default"]["bg-color"]);
    }
  });
  return colors;
};
const lineColorsDef = (socials) => {
  var colors = [];
  socials.forEach((name) => {
    try {
      colors.push(socialsColors[name]["ln-color"]);
    } catch {
      colors.push(socialsColors["Default"]["bg-color"]);
    }
  });
  return colors;
};

const dataFormat = (socials) => {
  return {
    labels: Object.keys(socials),
    datasets: [
      {
        label: "# of Visits",
        data: Object.values(socials),
        backgroundColor: backColorsDef(Object.keys(socials)),
        borderColor: lineColorsDef(Object.keys(socials)),
        borderWidth: 1,
      },
    ],
  };
};

var initialData = {
  "data": {
      "Facebook": 545756,
      "Twitter": 149160,
      "Youtube": 35658,
      "WhatsApp Webapp": 34104,
      "Reddit": 9089
  }
}
var initialDataFormated = dataFormat(initialData.data)

function SocialsDoughnut() {
  const [socials, setSocials] = useState([]);
  const [data, setData] = useState(initialDataFormated);

  const getUrl = (country) => {
    let params = { country: country };
    let query = Object.keys(params)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");
    let url = "http://127.0.0.1:8000/database/socials?" + query;
    return url
  }
  const getData = (url) => {
    fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setSocials(myJson.data);
      });
  };

  const handleClick = useCallback(
    (country) => {
      let url = getUrl(country);
      getData(url);
      setData(dataFormat(socials));
    },
    [getData, socials]
  );

  return (
    <div
      class="chart-container"
      style={{ position: "relative", height: 500 + "px", width: 500 + "px" }}
    >
      <form>
        <select onChange={(e) => handleClick(e.target.value)}>
          <option value="Guatemala">Guatemala</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Honduras">Honduras</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Panamá">Panamá</option>
          <option value="Nicaragua">Nicaragua</option>
        </select>
      </form>
      <Doughnut data={data} />
    </div>
  );
}

export default SocialsDoughnut;
