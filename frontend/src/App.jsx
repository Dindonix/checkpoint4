import { Routes, Route, BrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Technologies from "./pages/Technologies";
import Formation from "./pages/Formation";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Admin from "./pages/Admin";

import { CurrentUserContextProvider } from "../context/userContext";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CurrentUserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/login" element={<Connexion />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </CurrentUserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
