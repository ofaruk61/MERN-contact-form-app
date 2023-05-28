import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>MERN Form App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            {/* <Link to="/" className="me-2">Home</Link> */}
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
            <Nav.Link to="/messages" as={Link}>Messages</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 form-control-sm"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;