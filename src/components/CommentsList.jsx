import { Loading } from "./Loading";
import { fetchComments } from "../api/api";
import { useQuery } from "react-query";
import { CommentCard } from "./CommentCard";
import { sortByKey } from "../utils/sortArray";

//TODO looking at changing the formate of the comments created at created_at to time from now
//TODO drop down menu to allow users to select of they order it

export function CommentsList({ article_id }) {
  const { data, status } = useQuery(["comments", article_id], () => {
    return fetchComments(article_id);
  });

  return (
    <div className="comment">
      <h2>---Placeholder for adding own comment---</h2>
      <h2>{status === "success" && data.comments.length} Comments</h2>
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
