import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Annai from "./pages/Annai";
import Business from "./pages/Business";
import Compliance from "./pages/Compliance";
import Otoiawase from "./pages/Otoiawase";
import English from "./pages/English";

import "./css/style.css";
// import "./css/common.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/annai" element={<Annai />} />
        <Route path="/business" element={<Business />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/otoiawase" element={<Otoiawase />} />
        <Route path="/eng" element={<English />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
