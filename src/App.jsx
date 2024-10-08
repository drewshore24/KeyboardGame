import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
