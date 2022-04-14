import Row from "react-bootstrap/Row";

const centerStyle = {
    display: "flex",
    justifyContent: "center",
    verticalAlign: "baseline",
    alignItems: "center",
    width: "..",
    height: "..",
  };

function Description() {
  return (
    <Row style={centerStyle}>
      <h6>
        data visualization about how digital news are being consumed in Central America.
      </h6>
    </Row>
  );
}

export default Description;
