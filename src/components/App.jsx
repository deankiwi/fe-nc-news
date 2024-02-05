import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

function Navigation() {
  return <nav>Navigation Placeholder</nav>;
}
