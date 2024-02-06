import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Navigation } from "./components/Navigation";
import { ErrorPage } from "./pages/ErrorPage";
import { ArticlePage } from "./pages/ArticlePage";

//TODO add in Breadcrumbs

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
