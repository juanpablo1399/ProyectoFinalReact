import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

const NavBarHome = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#4169E1' }} >
        <Container fluid>
          <Navbar.Brand>
            <img src="liga-betplay-logo.png" height={"50px"} alt="Brand" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "white" }} />

          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div style={{ marginLeft: "500px" }} />
              <Nav.Link href="#action1" style={{ color: "white" }}>Inicio</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>Noticias</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>Equipos</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>Partidos</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>Páginas</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."
                style={{ backgroundColor: "cyan", color: 'white' }}
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline">🔎</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container id="container_aux" className='container_class' style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh"
      }}>
        <div style={{ borderRa: "10px" }}>
          <h4>Mejores Jugadores del FPC</h4>
        </div>
      </Container>
    </>
  );
}

export default NavBarHome;
