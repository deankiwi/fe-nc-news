import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-server-ccze.onrender.com/api",
});

export function getArticles() {
  return ncNewsApi("/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}
export function getArticle(article_id) {
  return ncNewsApi(`/articles/${article_id}`)
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}

export function fetchComments(article_id) {
  return ncNewsApi(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}

export function patchArticleVote(article_id, inc_votes) {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}
