import Preheader from "./Preheader";
import Container from "react-bootstrap/esm/Container";

function Layout(props) {
  return (
    <>
      <Preheader />
      <div>
        <Container>
            <main>{props.children}</main>
        </Container>
      </div>
    </>
  );
}

export default Layout;
