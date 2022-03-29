import { Guatemala, CostaRica, Salvador, Honduras, Nicaragua, Panama } from "./Flags/Flags";

function CountriesColors(props) {
    const countryId = props.country;

    function countryFlag(countryId){
    switch(countryId){
      case 'Guatemala':
        return [<Guatemala country={countryId}/>, "Guatemala"];
      case 'CostaRica':
        return [<CostaRica country={countryId}/>, "Costa Rica"];
      case 'ElSalvador':
        return [<Salvador country={countryId}/>, "El Salvador"];
      case 'Honduras':
        return [<Honduras country={countryId}/>, "Honduras"];
      case 'Nicaragua':
        return [<Nicaragua country={countryId}/>, "Nicaragua"];
      case 'Panama':
        return  [<Panama country={countryId}/>, "Panamá"];
      default:
        return [<Guatemala country={countryId}/>, "Guatemala"];
    }}
    
    let [flag, countryName] = countryFlag(countryId);

    return (
          <svg width='50%' height='100%'>
              {flag}
            <g>
              <circle cx={62.5} cy={60} r={30} fill={`url(#${countryId})`}></circle>
              <text  y={130} x={62.5} textAnchor="middle" fill="#444" style={{fontSize:"12px"}}>{countryName}</text>
            </g>
          </svg>
    );
  }

export default CountriesColors;