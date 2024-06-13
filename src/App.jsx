import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import HeaderEng from "./components/HeaderEng";
import Footer from "./components/Footer";
import FooterEng from "./components/FooterEng";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Annai from "./pages/Annai";
import Business from "./pages/Business";
import Compliance from "./pages/Compliance";
import Otoiawase from "./pages/Otoiawase";
import English from "./pages/English";

import EngAttention from "./pages/eng/EngAttention";
import EngSolution from "./pages/eng/EngSolution";
import EngProducts from "./pages/eng/EngProducts";
import EngShipping from "./pages/eng/EngShipping";
import EngCase from "./pages/eng/EngCase";
import EngCompany from "./pages/eng/EngCompany";
import EngContact from "./pages/eng/EngContact";
import { EnglishProvider, useEnglish } from "./context/EnglishContext";

import "./css/style.css";

import "./css/common.css";
// import "./css/top.css";
// import "./css/slick.css";
// import "./jquery.fs.boxer.css";

const AppContent = () => {
  const { isEnglishPage } = useEnglish();
  return (
    <>
      {isEnglishPage ? <HeaderEng /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/annai" element={<Annai />} />
        <Route path="/business" element={<Business />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/otoiawase" element={<Otoiawase />} />
        <Route path="/eng" element={<English />} />
        <Route path="/eng/attention" element={<EngAttention />} />
        <Route path="/eng/solution" element={<EngSolution />} />
        <Route path="/eng/products" element={<EngProducts />} />
        <Route path="/eng/shipping" element={<EngShipping />} />
        <Route path="/eng/case" element={<EngCase />} />
        <Route path="/eng/company" element={<EngCompany />} />
        <Route path="/eng/contact" element={<EngContact />} />
      </Routes>
      {isEnglishPage ? <FooterEng /> : <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <EnglishProvider>
        <AppContent />
      </EnglishProvider>
    </Router>
  );
}

export default App;
