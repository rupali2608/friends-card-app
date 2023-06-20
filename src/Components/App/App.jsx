import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("../Home/Home"));
const Details = lazy(() => import("../Detail/Detail"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home title="Home Page" />} />
      <Route
        path="/Home"
        element={
          <Suspense fallback={<h2>loading details page...</h2>}>
            <Home title="Home Page" />
          </Suspense>
        }
      />
      <Route
        path="/Detail"
        element={
          <Suspense fallback={<h2>loading details page...</h2>}>
            <Details />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
