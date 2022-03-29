import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ul_style = {
  display: "block",
  listStyleType: "disc",
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px",
  paddingInlineStart: "40px",
};

function Preheader() {
  return (
    <Col lg={4}>
      <ul style={ul_style}>
        <li style={{ display: "inline-block" }}>
          <a
            href="https://github.com/SergioPenagos/NewStatsFE"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li style={{ display: "inline-block" }}>
          <a
            href="https://www.linkedin.com/in/sergio-penagos-057327181/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </Col>
  );
}

export default Preheader;
