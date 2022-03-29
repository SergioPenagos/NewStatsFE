import Preheader from "./Preheader";
import Container from "react-bootstrap/esm/Container";

function Layout(props) {
  return (
    <>
      <Preheader />
      <div>
        <Container style={{display:"flex", justifyContent:"center"}}>
            <main>{props.children}</main>
        </Container>
      </div>
    </>
  );
}

export default Layout;
