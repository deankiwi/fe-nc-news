import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Navigation } from "./components/Navigation";
import { ErrorPage } from "./pages/ErrorPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { UsersPage } from "./pages/UserPage";

//TODO add in Breadcrumbs

function App() {
  return (
    <>
      <Navigation />
      <div className="p-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
