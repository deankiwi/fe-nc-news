import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Navigation } from "./Navigation";

//TODO add 404
//TODO think how we will let the user know if articles fail to be fetched

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
