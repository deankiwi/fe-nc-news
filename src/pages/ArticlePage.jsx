import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { getArticle } from "../api/api";
import { Article } from "../components/Article";

export function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticles] = useState({});
  const [isLoadingArticle, setIsLoadingArticle] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticle(article_id)
      .then((articlesFetched) => {
        setArticles(articlesFetched);
        setIsLoadingArticle(false);
      })
      .catch((err) => {
        setIsLoadingArticle(false);
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <article>
      <h2>Article</h2>
      <Loading isLoading={isLoadingArticle} loadingDescription="article" />
      {!isLoadingArticle && <Article article={article} />}
    </article>
  );
}
