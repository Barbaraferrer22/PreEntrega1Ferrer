import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import { useCartContext } from "../Context/CartContext";

const NavBar = ({ children }) => {
  const { cantidadTotal } = useCartContext();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link
          className={({ isActive }) =>
            isActive ? "btn btn-info" : "btn btn-outline-info"
          }
          to="/"
        >
          Valentina Carrillo
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-info" : "btn btn-outline-info"
              }
              to="/categoria/mareas"
            >
              Colección Mareas
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-info" : "btn btn-outline-info"
              }
              to="/categoria/florecer"
            >
              Colección Florecer
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-info" : "btn btn-outline-info"
              }
              to="/categoria/malibu"
            >
              Colección Malibú
            </NavLink>
          </Nav>

          <nav>
            <Link to="/cart">
              {cantidadTotal()}
              <CartWidget />
            </Link>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
