import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Navigation } from "./components/Navigation";
import { ErrorPage } from "./pages/ErrorPage";
import { ArticlePage } from "./pages/ArticlePage";

//TODO select a random user and use them
//TODO sort out sign in page
//TODO add in Breadcrumbs

function App() {
  return (
    <>
      <Navigation />
      <div className="p-2">

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
