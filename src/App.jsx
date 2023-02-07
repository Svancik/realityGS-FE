import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Agent } from "./pages/agent/Agent";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/makler" element={<Agent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
