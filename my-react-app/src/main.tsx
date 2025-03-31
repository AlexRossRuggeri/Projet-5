import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/common/layout/Layout";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import About from "./pages/a-propos/About";
import Listings from "./pages/logements/Logements";

import "./main.scss";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/fiche-logement" element={<Listings />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
