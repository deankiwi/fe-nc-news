import { Card } from "react-bootstrap";
import { utcToDayMonthYear } from "../utils/timeFormatter";
import { Link } from "react-router-dom";

//TODO add like and comments image

export function ArticleSummary({ article }) {
return (
    <Card>
      <Card.Body>
        <Link to={`/articles/${article.article_id}`}>
          <Card.Title>{article.title}</Card.Title>
          <Card.Img
            src={`${article.article_img_url}`}
            alt={`Image for article '${article.title}'`}
          />
        </Link>
      </Card.Body>
      <Card.Footer style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <small className="text-muted">
            By:
            <Card.Link href={`/articles?author=${article.author}`}>
            {article.author}
            </Card.Link>
            
          </small>
        </div>
        <div>
          <small className="text-muted">
            Topic:
            <Card.Link href={`/articles?topic=${article.topic}`}>
              {article.topic}
            </Card.Link>
          </small>
        </div>
        <div>
          <small className="text-muted">Votes: {article.votes}</small>
        </div>
        <div>
          <small className="text-muted">
            {utcToDayMonthYear(article.created_at)}
          </small>
        </div>
      </Card.Footer>
    </Card>
  );
}
