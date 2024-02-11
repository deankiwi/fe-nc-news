import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Navigation } from "./components/Navigation";
import { ErrorPage } from "./pages/ErrorPage";
import { ArticlePage } from "./pages/ArticlePage";
import { useState } from "react";
import { ArticlesPage } from "./pages/ArticlesPage";

//TODO sort out sign in page
//TODO add in Breadcrumbs
//TODO add link to github repo in nav bar

function App() {
  return (
    <>
      <Navigation />
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
