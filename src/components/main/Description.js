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
        una visualización del consumo de noticias en línea en centro América.
      </h6>
    </Row>
  );
}

export default Description;
