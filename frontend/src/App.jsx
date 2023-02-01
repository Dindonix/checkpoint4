import { Routes, Route, BrowserRouter } from "react-router-dom";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Formation from "./pages/Formation";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Connexion />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
