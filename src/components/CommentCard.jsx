import Card from "react-bootstrap/Card";
import { utcToTimeAgo } from "../utils/timeFormatter";
import { useContext, useState } from "react";
import { deleteComment } from "../api/api";
import { Alert } from "react-bootstrap";
import { UserContext } from "../contexts/User";

export function CommentCard({ comment }) {
  const [deleting, setDeleting] = useState(false);
  const {
    user: { username },
  } = useContext(UserContext);

  const [successfullyDeleted, setSuccessfullyDeleted] = useState(null);
  function handleDelete(comment_id) {
    setDeleting(true);
    deleteComment(comment_id)
      .then(() => {
        setSuccessfullyDeleted("success");
      })
      .catch((error) => {
        setSuccessfullyDeleted("fail");
      });
  }

  return (
    <>
      {successfullyDeleted !== "success" && (
        <Card bg={deleting && "danger"}>
          <Card.Body>
            <Card.Text>{comment.body}</Card.Text>
          </Card.Body>
          <Card.Footer
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <small className="text-muted">By: {comment.author}</small>
            </div>
            <div>
              <small className="text-muted">Votes: {comment.votes}</small>
            </div>
            <div>
              <small className="text-muted">
                {utcToTimeAgo(comment.created_at)}
              </small>
            </div>
            {comment.hasOwnProperty("comment_id") && (
              <div>
                {username === comment.author && (
                  <button
                    disabled={deleting}
                    onClick={() => handleDelete(comment.comment_id)}
                  >
                    <small className="text-muted">🗑️</small>
                  </button>
                )}
              </div>
            )}
          </Card.Footer>
          {successfullyDeleted === "fail" && <Alert>Failed to delete</Alert>}
        </Card>
      )}{" "}
    </>
  );
}
