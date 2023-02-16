import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Makler } from "./pages/makler/Makler";
import { Team } from "./pages/team/Team";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tym" element={<Team />} />
          <Route path="/makler/:id" element={<Makler />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
