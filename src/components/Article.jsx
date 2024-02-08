import { Row, Col, Card } from "react-bootstrap";
import { utcToDayMonthYear } from "../utils/timeFormatter";
import { VoteArticle } from "./VoteArticle";

export function Article({ article }) {
  return (
    <div>
      <Card>
        <Row xs={1} sm={2} className="g-4 m-auto">
          <Col>
            <Card.Title>{article.title}</Card.Title>
            <p className="d-none d-sm-block">{article.body}</p>
          </Col>
          <Col className="m-auto">
            <Card.Img
              className="d-block mx-auto img-fluid"
              src={`${article.article_img_url}`}
              alt={`Image for article '${article.title}'`}
            />
            <Card.Footer
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <small className="text-muted">By: {article.author}</small>
              </div>
              <div>
                <small className="text-muted">Topic: {article.topic}</small>
              </div>
              <div>
                <small className="text-muted">
                  {utcToDayMonthYear(article.created_at)}
                </small>
              </div>
              <VoteArticle
                votes={article.votes}
                article_id={article.article_id}
              />
            </Card.Footer>
          </Col>
        </Row>
        <p className="d-sm-none">{article.body}</p>
      </Card>
    </div>
  );
}
