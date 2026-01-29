import { useState } from "react";
import { motion } from "framer-motion"; // Corrected import for framer-motion

function Navigation({ onSelect }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <button className="nav-link" onClick={() => onSelect("hero")}>
          Home
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={() => onSelect("about")}>
          About
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={() => onSelect("projects")}>
          Projects
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={() => onSelect("work")}>
          Work
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={() => onSelect("contact")}>
          Contact
        </button>
      </li>
    </ul>
  );
}


const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const yourName = "Manish"; // Your name for the brand/logo

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            aria-label="Go to homepage"
          >
            Manish
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt={isOpen ? "Close menu icon" : "Menu icon"}
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onSelect={setActiveSection} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onSelect={(section) => { setActiveSection(section); setIsOpen(false); }} />
            {/* Close menu after selecting */}
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
