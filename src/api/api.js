import axios from "axios";

export function getArticles() {
  return axios("https://nc-news-server-ccze.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
}
