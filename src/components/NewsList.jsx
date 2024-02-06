import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { ArticleSummary } from "./ArticleSummary";
import { Col, Row } from "react-bootstrap";
import { Loading } from "./Loading";

//TODO Check articles are coming from newest first

export function NewsList() {
  const [articles, setArticles] = useState([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  useEffect(() => {
    getArticles().then((articlesFetched) => {
      setArticles(articlesFetched);
      setIsLoadingArticles(false);
    });
  }, []);
  return (
    <article>
      <Loading isLoading={isLoadingArticles} loadingDescription="articles" />
      <h2> Articles Placeholder</h2>
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
