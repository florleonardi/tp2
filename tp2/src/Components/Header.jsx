import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">SOBRE NOSOTROS</Nav.Link>
          <Nav.Link href="#action2">PRODUCTOS</Nav.Link>
          <NavDropdown title="SERVICIOS" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Sub 1 Test 3</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Sub 2 Test 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Sub 3 Test 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            CONTACTOS
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header