import Preheader from "./Preheader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

function Layout(props) {
  return (
    <>
      <div className="pre-header">
        <Container>
          <Row>
            <Col lg={8}></Col>
            <Preheader />
          </Row>
        </Container>
      </div>
      <div>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <main>{props.children}</main>
        </Container>
      </div>
    </>
  );
}

export default Layout;
