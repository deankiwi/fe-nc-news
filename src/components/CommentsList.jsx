import { Loading } from "./Loading";
import { fetchComments } from "../api/api";
import { CommentCard } from "./CommentCard";
import { sortByKey } from "../utils/sortArray";
import { AddComment } from "./AddComment";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

//TODO drop down menu to allow users to select of they order it
//TODO break of everything with adding comments into it's own thing

export function CommentsList({ article_id }) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    fetchComments(article_id)
      .then((receivedData) => {
        setData(receivedData);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  }, []);

  const [userComments, setUserComments] = useState([]);
  const [userCommentChecked, setUserCommentChecked] = useState([]);
  const [userCommentFailed, setUserCommentFailed] = useState([]);
  return (
    <div className="comment">
      <br />
      <h2>{status === "success" && data.comments.length} Comments</h2>
      <AddComment
        article_id={article_id}
        setUserComments={setUserComments}
        setUserCommentChecked={setUserCommentChecked}
        setUserCommentFailed={setUserCommentFailed}
        setData={setData}
      />

      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && (
        <Loading isLoading={true} loadingDescription={"comments"} />
      )}
      {status === "success" && (
        <section>
          {sortByKey(data.comments, "created_at", false).map((comment) => (
            <CommentCard comment={comment} key={comment.comment_id} />
          ))}
        </section>
      )}
    </div>
  );
}

function SubmittedComment({ children, boxColour }) {
  return (
    <div className={`bg-${boxColour} p-2 border-primary`}>
      {children}
      <div>{boxColour === "danger" && <Alert>Failed to send</Alert>}</div>
    </div>
  );
}
