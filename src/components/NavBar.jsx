import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import miLogo from "../assets/logo.png";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg">
      <Container>
        <Navbar.Brand href="#home">
          <img className='logo' src={miLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto links">
            <Nav.Link href="#home">inicio</Nav.Link>
            <Nav.Link href="#link">tacos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
