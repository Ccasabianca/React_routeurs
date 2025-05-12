import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/chemin-de-votre-page">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/chemin-de-votre-page">Vêtements</Nav.Link>
            <Nav.Link as={Link} to="/chemin-de-votre-page">Chaussures</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
