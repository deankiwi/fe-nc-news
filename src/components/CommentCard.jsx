import Card from "react-bootstrap/Card";
import { utcToDayMonthYear, utcToTimeAgo } from "../utils/timeFormatter";

export function CommentCard({ comment }) {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ display: "flex", justifyContent: "space-between" }}>
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
      </Card.Footer>
    </Card>
  );
}
