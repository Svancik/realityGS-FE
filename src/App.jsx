import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Makler } from "./pages/makler/Makler";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/makler" element={<Makler />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
