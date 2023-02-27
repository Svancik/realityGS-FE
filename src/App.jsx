import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Makler } from "./pages/makler/Makler";
import { Team } from "./pages/team/Team";
import { PhotoGallery } from "./pages/photoGallery/PhotoGallery";
import { Investors } from "./pages/investors/Investors";
import { Offers } from "./pages/offers/Offers";
import { Contact } from "./pages/contact/Contact";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tym" element={<Team />} />
          <Route path="/fotogalerie" element={<PhotoGallery />} />
          <Route path="/investori" element={<Investors />} />
          <Route path="/nabidka" element={<Offers />} />
          <Route path="/makler/:id" element={<Makler />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
