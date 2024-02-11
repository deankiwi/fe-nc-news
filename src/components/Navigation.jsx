import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UserContext } from "../contexts/User";
import { Image } from "react-bootstrap";
import { fetchTopics } from "../api/api";

//TODO add link to user avatar to user page

export function Navigation() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);
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
            <Nav.Link href="/articles">Articles</Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              {topics.map((topic) => {
                return (
                  <NavDropdown.Item
                    key={topic.slug}
                    href={`/articles?topic=${topic.slug}`}
                  >
                    {topic.slug}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link href="https://github.com/deankiwi/fe-nc-news">Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
