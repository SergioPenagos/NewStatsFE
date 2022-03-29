import Row from "react-bootstrap/Row";
import CountriesColors from "./Countries";

function CountriesDesc2() {
    return( 
      <Row>
  
        <div className="col md=2 xl=2 d-flex"></div>
        <div className="col md=4 xl=4 d-flex justify-content-center">
          <CountriesColors colorName={"#FFB09E"} country={"Nicaragua"} />
        </div>
        <div className="col md=4 xl=4 d-flex justify-content-center">
          <CountriesColors colorName={"#FFB09E"} country={"Panama"} />
        </div>
        <div className="col md=2 xl=2 d-flex"></div>
        
      </Row>)
}

export default CountriesDesc2;