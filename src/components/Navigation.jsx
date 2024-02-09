import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UserContext } from "../contexts/User";
import { Image } from "react-bootstrap";

//TODO add link to user avatar to user page

export function Navigation() {
  const { user } = useContext(UserContext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <div>NC News</div>
        </Navbar.Brand>
        <Image
          src={user.avatar_url}
          alt={`${user.username} avatar`}
          roundedCircle
          style={{ width: "30px", marginRight: "10px" }}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/user">user</Nav.Link>
            <NavDropdown title="Articles" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tbc">topic 1</NavDropdown.Item>
              <NavDropdown.Item href="/tbc">topic 2</NavDropdown.Item>
              <NavDropdown.Item href="/tbc">topic 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
