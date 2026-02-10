import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Navigation({ onSelect, onNavigate }) {
  const navigate = useNavigate();

  const handleClick = (section) => {
    onSelect(section);
    // navigate to matching path (hero -> /)
    const path = section === "hero" ? "/" : `/${section}`;
    navigate(path);
    onNavigate?.();
  };

  return (
    <ul className="nav-ul" role="navigation" aria-label="Main navigation">
      {[
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "work", label: "Work" },
        { id: "contact", label: "Contact" },
      ].map(({ id, label }) => (
        <li key={id} className="nav-li">
            <button 
              className="nav-link transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 px-3 py-2 rounded"
            onClick={() => handleClick(id)}
            aria-label={`Navigate to ${label}`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Close mobile menu when the app triggers a scroll-to-top/navigation event
  useEffect(() => {
    const handler = () => setIsOpen(false);
    window.addEventListener("scroll-to-top", handler);
    return () => window.removeEventListener("scroll-to-top", handler);
  }, []);

  return (
    <nav className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40" role="navigation" aria-label="Main">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-3 px-4">
          <a
            href="#hero"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded px-2 py-1"
            aria-label="Go to homepage"
            onClick={closeMenu}
          >
            Manish
          </a>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded p-1 sm:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt=""
              aria-hidden="true"
            />
          </button>

          {/* Desktop menu */}
          <div className="hidden sm:block">
            <Navigation onSelect={setActiveSection} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          role="region"
          aria-label="Mobile navigation"
        >
          <nav className="pb-5 px-4">
            <Navigation 
              onSelect={setActiveSection}
              onNavigate={closeMenu}
            />
          </nav>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
