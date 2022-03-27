import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  verticalAlign: "baseline",
  alignItems: "center",
  width: "..",
  height: "..",
  marginTop: "20px",
};


function AboutPage() {
  return (
    <Container>
      <Row style={centerStyle}>
        <h1>About Page</h1>
      </Row>
    </Container>
  );
}

export default AboutPage;
