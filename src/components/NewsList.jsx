import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { ArticleSummary } from "./ArticleSummary";

export function NewsList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(getArticles());
  }, []);
  console.log(articles);
  return (
    <article>
      <h2> Articles Placeholder</h2>
      {articles.map((article) => {
        return <ArticleSummary key={article.article_id} article={article} />;
      })}
    </article>
  );
}
