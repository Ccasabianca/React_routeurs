import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useMatch } from "react-router";
import "../assets/Header.css";

function Header() {
    const match = useMatch("/category/:query");
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {match ? (
              <h2>Catégorie : {match.params.query}</h2>
            ) :  null }
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Accueil
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/vetements">
                Vêtements
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/chaussures">
                Chaussures
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;