import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const UserCard = ({ user: { username, name, avatar_url } }) => {
  const { setUser } = useContext(UserContext);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    setUser({ username, name, avatar_url });
  };

  return (
    <Card className="text-center mb-4" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={avatar_url}
        alt={username}
        style={{ maxHeight: "200px", objectFit: "scale-down" }}
      />
      <Card.Title>{name}</Card.Title>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Username: {username}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" onClick={handleUpdateUser}>
          Sign in
        </Button>
      </Card.Body>
    </Card>
  );
};
