import { Loading } from "./Loading";
import { fetchComments } from "../api/api";
import { useQuery } from "react-query";
import { CommentCard } from "./CommentCard";
import { sortByKey } from "../utils/sortArray";
import { AddComment } from "./AddComment";
import { useState } from "react";
import { Alert } from "react-bootstrap";

//TODO looking at changing the formate of the comments created at created_at to time from now
//TODO drop down menu to allow users to select of they order it
//TODO break of everything with adding comments into it's own thing
//TODO if comment fail make box red

export function CommentsList({ article_id }) {
  const { data, status } = useQuery(["comments", article_id], () => {
    //TODO BUG fetches data comments when click back onto page making user comment appear twice

    console.log("fetchComments()");
    return fetchComments(article_id);
  });
  const [userComments, setUserComments] = useState([]);
  const [userCommentChecked, setUserCommentChecked] =   useState([]);
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
      />{" "}
      <br />
      {sortByKey(userComments, "created_at", false).map((comment) => {
        let boxColour = userCommentChecked.some(
          (commentThatHaveBeenAddedToDatabase) =>
            commentThatHaveBeenAddedToDatabase.created_at === comment.created_at
        )
          ? "success"
          : "primary";
        if (
          userCommentFailed.some(
            (commentThatHaveFailedToBeenAddedToDatabase) =>
              commentThatHaveFailedToBeenAddedToDatabase.created_at ===
              comment.created_at
          )
        ) {
          boxColour = "danger";
        }

        return (
          <SubmittedComment key={comment.created_at} boxColour={boxColour}>
            <CommentCard comment={comment} />
          </SubmittedComment>
        );
      })}
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
      {boxColour === "danger" && <Alert>Failed to send</Alert>}
    </div>
  );
}
