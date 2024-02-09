import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/User";
import { postComment } from "../api/api";

//TODO add error handling for when user is not signed in and tries to comment.
//TODO could be a good idea to disable submit when comment is being added to server incase they try to re write message

export function AddComment({
  article_id,
  setUserComments,
  setUserCommentChecked,
  setUserCommentFailed,
}) {
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const {
    user: { username },
  } = useContext(UserContext);

  const handleCommentChange = (event) => {
    setError("");
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (body.trim() === "") {
      setError("Comment cannot be empty");
      return;
    }

    const newComment = {
      votes: 0,
      created_at: new Date().toISOString(),
      author: username,
      body,
    };

    postComment(article_id, username, body)
      .then(() => {
        setUserCommentChecked((userCommentChecked) => {
          return [...userCommentChecked, newComment];
        });
      })
      .catch((error) => {
        setUserCommentFailed((userCommentFailed) => {
          return [...userCommentFailed, newComment];
        });
      });

    setUserComments((currentUserComments) => {
      const updatedUserComments = [...currentUserComments, newComment];
      return updatedUserComments;
    });
    setError("");
    setBody("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="comment"
          value={body}
          onChange={handleCommentChange}
        />
      </Form.Group>
      {error && <Alert variant="danger">{error}</Alert>}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
