import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <Hero />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "work":
        return <Experiences />; // assuming "work" is Experiences
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="container mx-auto max-w-8xl">
      <Navbar setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
