import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/">Valentina Carrillo</Link>
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
              <NavLink to="/categoria/mareas">Colección Mareas</NavLink>
              <NavLink to="/categoria/florecer">Colección Florecer</NavLink>
              <NavLink to="/categoria/malib">Colección Malibú</NavLink>
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Trikini Salty"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscador</Button>
          </Form> */}

          <nav>
            <Link to="/cart">🛒</Link>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
