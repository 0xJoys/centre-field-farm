import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about-us" element={<AboutUsPage />} />
          <Route exact path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
