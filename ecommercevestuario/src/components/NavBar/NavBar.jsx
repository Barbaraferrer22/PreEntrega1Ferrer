import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Valentina Carrillo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action2">Vesturio</Nav.Link>
            <NavDropdown
              title="Bikinis y Traje de baños"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">
                Colección Mareas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Colección Florecer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Colección Malibú
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Trikini Salty"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscador</Button>
          </Form>
          🛒
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
