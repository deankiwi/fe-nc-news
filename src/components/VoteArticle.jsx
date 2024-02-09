import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { patchArticleVote } from "../api/api";

export function VoteArticle({ votes, article_id }) {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [userVote, setUserVote] = useState(0);
  const [voteBeingSubmitted, setVoteBeingSubmitted] = useState(false);
  const [voteFailed, setVoteFailed] = useState(false);

  function updateVote(vote) {
    //check if vote has already been made and if so remove it
    setVoteFailed(false);
    setVoteBeingSubmitted(true);
    if (userVote === vote) {
      setCurrentVotes(currentVotes - vote);
      setUserVote(0);
      updateVoteOnServer(article_id, -vote);
    } else {
      setCurrentVotes(currentVotes + vote - userVote);
      setUserVote(vote);
      updateVoteOnServer(article_id, vote - userVote);
    }
  }

  function updateVoteOnServer(article_id, inc_votes) {
    patchArticleVote(article_id, inc_votes)
      .catch((error) => {
        if (userVote === 0) {
          setCurrentVotes(currentVotes);
          setUserVote(0);
        } else {
          setCurrentVotes(currentVotes - inc_votes - userVote);
          setUserVote(inc_votes);
        }
        setVoteBeingSubmitted(false);
        setVoteFailed(true);
  
      })
      .finally(() => setVoteBeingSubmitted(false));
  }

  return (
    <>
      <div>
        <ButtonGroup size="sm" aria-label="Basic example">
          <Button
            disabled={voteBeingSubmitted}
            onClick={() => updateVote(1)}
            variant={userVote === 1 ? "success" : "light"}
          >
            👍
          </Button>
          <Button
            disabled={voteBeingSubmitted}
            onClick={() => updateVote(-1)}
            variant={userVote === -1 ? "danger" : "light"}
          >
            👎
          </Button>
        </ButtonGroup>{" "}
        <small className="text-muted">{currentVotes}</small>
      </div>
      {voteFailed && <small style={{ color: "red" }}>ERROR</small>}
    </>
  );
}
