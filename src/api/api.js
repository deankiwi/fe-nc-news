import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-server-ccze.onrender.com/api",
});

export function getArticles(searchParams) {
  let url = "/articles?";

  const topic = searchParams.get("topic");

  url += topic ? `topic=${topic}` : "";

  return ncNewsApi(url)
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

export function postComment(article_id, username, body) {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, { username, body })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}
export function deleteComment(comment_id) {
  return ncNewsApi.delete(`/comments/${comment_id}`).catch((error) => {
    console.log(error);
    return Promise.reject(error);
  });
}

export function fetchTopics(article_id) {
  return ncNewsApi(`/topics`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}

export function fetchUsers(article_id) {
  return ncNewsApi(`/users`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}
