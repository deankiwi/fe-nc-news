import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { ArticleSummary } from "./ArticleSummary";
import { Col, Row } from "react-bootstrap";
import { Loading } from "./Loading";
import { ErrorComponent } from "./ErrorComponent";
import { useSearchParams } from "react-router-dom";
import { sortByKey } from "../utils/sortArray";

//TODO Display what filters the user has

export function NewsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by");
  const reverseOrder = searchParams.get("reverseOrder");
  const ascending = reverseOrder === "true" ? true : false;
  const author = searchParams.get("author");
  const [articles, setArticles] = useState([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles(searchParams)
      .then((articlesFetched) => {
        setArticles(articlesFetched);
        setIsLoadingArticles(false);
      })
      .catch((err) => {
        setIsLoadingArticles(false);
        setError(err);
      });
  }, [searchParams]);
  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <article>
      <h2>Articles</h2>
      <Loading isLoading={isLoadingArticles} loadingDescription="articles" />
      <Row xs={1} sm={2} lg={3} className="g-4">
        {sortByKey(
          articles.filter((article) => {
            if (!author) {
              return true;
            } else if (author === article.author) {
              return true;
            } else {
              return false;
            }
          }),
          sort_by,
          ascending
        ).map((article) => (
          <Col key={article.article_id}>
            <ArticleSummary article={article} />
          </Col>
        ))}
      </Row>
    </article>
  );
}
