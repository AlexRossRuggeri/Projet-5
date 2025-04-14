import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/common/Layout/Layout";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import FicheLogement from "./pages/HousingFile/HousingFile";

import "./Main.scss";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/fiche-logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
