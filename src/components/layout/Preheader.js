import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Preheader() {
  return (
    <div className="pre-header">
      <Container>
        <Row>
          <Col lg={8}>
          </Col>
          <Col lg={4}>
            <ul>
              <li>
                <a href="https://github.com/SergioPenagos/NewStatsFE" target={"_blank"}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sergio-penagos-057327181/" target={"_blank"}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Preheader;
