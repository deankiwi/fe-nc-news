import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { ArticleSummary } from "./ArticleSummary";
import { Col, Row } from "react-bootstrap";
import { Loading } from "./Loading";
import { ErrorComponent } from "./ErrorComponent";

//TODO Check articles are coming from newest first
//TODO Display what filters the user has

export function NewsList() {
  const [articles, setArticles] = useState([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getArticles()
      .then((articlesFetched) => {
        setArticles(articlesFetched);
        setIsLoadingArticles(false);
      })
      .catch((err) => {
        setIsLoadingArticles(false);
        setError(err);
      });
  }, []);
  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <article>
      <h2>Articles</h2>
      <Loading isLoading={isLoadingArticles} loadingDescription="articles" />
      <Row xs={1} sm={2} lg={3} className="g-4">
        {articles.map((article) => (
          <Col key={article.article_id}>
            <ArticleSummary article={article} />
          </Col>
        ))}
      </Row>
    </article>
  );
}
