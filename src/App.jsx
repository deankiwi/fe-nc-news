import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Navigation } from "./components/Navigation";
import { ErrorPage } from "./pages/ErrorPage";
import { ArticlePage } from "./pages/ArticlePage";
import { useState } from "react";
import { ArticlesPage } from "./pages/ArticlesPage";

//TODO select a random user and use them
//TODO sort out sign in page
//TODO add in Breadcrumbs

function App() {
  const [topics, setTopics] = useState([
    {
      slug: "coding",
      description: "Code is love, code is life",
    },
    {
      slug: "football",
      description: "FOOTIE!",
    },
    {
      slug: "cooking",
      description: "Hey good looking, what you got cooking?",
    },
  ]);

  return (
    <>
      <Navigation topics={topics} />
      <div className="p-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
