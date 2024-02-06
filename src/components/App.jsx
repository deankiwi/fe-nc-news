import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Navigation } from "./Navigation";
import { ErrorComponent } from "./ErrorComponent";

//TODO add 404
//TODO think how we will let the user know if articles fail to be fetched

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={
            <ErrorComponent
              error={{ message: "404 page not found", response: { status: 404 } }}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
