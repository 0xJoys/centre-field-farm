import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import EggsBreeding from "./pages/EggsBreeding";
import BlogsPage from "./pages/BlogsPage";
import ChickenPage from "./pages/ChickenPage";
import FAQPage from "./pages/FAQPage";
import FarmPage from "./pages/FarmPage";
import LandPage from "./pages/LandPage";
import LivestockPage from "./pages/LivestockPage";
import NotFound404 from "./pages/NotFound404";
import PartnersPage from "./pages/PartnersPage";
import PigAnimals from "./pages/PigAnimals";
import TeamPage from "./pages/TeamPage";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about-us" element={<AboutUsPage />} />
          <Route exact path="/contact-us" element={<ContactUsPage />} />
          <Route exact path="/eggs-breeding" element={<EggsBreeding />} />
          <Route exact path="/blogs" element={<BlogsPage />} />
          <Route exact path="/chicken" element={<ChickenPage />} />
          <Route exact path="/fAQ" element={<FAQPage />} />
          <Route exact path="/farm" element={<FarmPage />} />
          <Route exact path="/land" element={<LandPage />} />
          <Route exact path="/livestock" element={<LivestockPage />} />
          <Route exact path="/notFound404" element={<NotFound404 />} />
          <Route exact path="/partners" element={<PartnersPage />} />
          <Route exact path="/pigAnimals" element={<PigAnimals />} />
          <Route exact path="/team" element={<TeamPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
