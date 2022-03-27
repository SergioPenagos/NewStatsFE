import Row from "react-bootstrap/Row";

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  verticalAlign: "baseline",
  alignItems: "center",
  width: "..",
  height: "..",
};

function Title() {
  return (
    <div className="row mt-5">
      <div className="col md=5 xl=5 d-flex justify-content-center"> </div>
      <div className="col md=2 xl=2 d-flex justify-content-center"> 
      <h1>what's news?</h1>
      </div>
      <div className="col md=5 xl=5 d-flex justify-content-center"> </div>
    </div>
  );
}

export default Title;
