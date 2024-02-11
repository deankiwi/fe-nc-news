import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/User";
import { postComment } from "../api/api";

//TODO add error handling for when user is not signed in and tries to comment.

export function AddComment({ article_id, setData }) {
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");

  const {
    user: { username },
  } = useContext(UserContext);

  const handleCommentChange = (event) => {
    setStatus("");
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    setStatus("loading");
    event.preventDefault();

    postComment(article_id, username, body)
      .then((responseData) => {
        setStatus("success");
        setBody("");
        setData((currentComments) => {
          return {
            comments: [...currentComments.comments, responseData.comments],
          };
        });
      })
      .catch((error) => {
        setStatus("error");
      });
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
      {status === "loading" && <Alert variant="info">adding comment...</Alert>}
      {status === "success" && <Alert variant="success">done</Alert>}
      {status === "error" && (
        <Alert variant="danger">failed to add comment</Alert>
      )}

      <Button
        disabled={status === "loading" || body.length === 0}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}
