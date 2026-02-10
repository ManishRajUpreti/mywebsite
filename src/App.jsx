import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import ErrorBoundary from "./components/ErrorBoundary";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  // keep activeSection in sync with the URL path
  useEffect(() => {
    const path = location.pathname.replace(/^\//, "");
    switch (path) {
      case "":
        setActiveSection("hero");
        break;
      case "about":
      case "projects":
      case "work":
      case "contact":
        setActiveSection(path);
        break;
      default:
        setActiveSection("hero");
    }
  }, [location.pathname]);

  // update document title when active section changes
  useEffect(() => {
    const titleMap = {
      hero: "Manish Raj Upreti",
      about: "About - Manish Raj Upreti",
      projects: "Projects - Manish Raj Upreti",
      work: "Work - Manish Raj Upreti",
      contact: "Contact - Manish Raj Upreti",
    };

    document.title = titleMap[activeSection] || "Manish Raj Upreti";
  }, [activeSection]);

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

// ScrollToTop resets window scroll on route changes to ensure top layout states
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Also reset any mobile nav open state (if needed) by emitting a custom event
    // so components can respond if they listen. Not required here but harmless.
    window.dispatchEvent(new Event('scroll-to-top'));
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<MainContent />} />
          <Route path="/projects" element={<MainContent />} />
          <Route path="/work" element={<MainContent />} />
          <Route path="/contact" element={<MainContent />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
