import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { fetchUsers } from "../api/api";
import { Loading } from "./Loading";
import { Alert, Col, Row } from "react-bootstrap";
import { UserCard } from "./UserCard";

export function Users() {
  //handle logic of getting user from API
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading");

  const {
    user: { username },
  } = useContext(UserContext);


  useEffect(() => {
    fetchUsers()
      .then(({ users }) => {
        setUsers(users);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return (
    <>
      {status === "loading" && (
        <Loading isLoading={true} loadingDescription={"users"} />
      )}
      {status === "error" && (
        <Alert variant="danger">failed to get users</Alert>
      )}
      <Row xs={1} md={3} lg={4} className="justify-content-center">
        {users.map((user) => {
          return (
            <Col key={`${user.username}Card`} className="d-flex">
              <UserCard user={user} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
