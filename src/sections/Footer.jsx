import { Link } from "react-router-dom";
import { mySocials } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yourName = "Manish Raj Upreti";

  return (
    <footer className="mt-20 pt-8 pb-4">
      <div className="mb-6 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col gap-8 sm:gap-6">
          {/* Legal Links */}
          <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm text-neutral-400" aria-label="Legal">
            <Link 
              to="/terms" 
              className="hover:text-white transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded"
              aria-label="View terms and conditions"
            >
              Terms & Conditions
            </Link>
            <span className="text-neutral-600" aria-hidden="true">|</span>
            <Link 
              to="/privacy" 
              className="hover:text-white transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded"
              aria-label="View privacy policy"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Social Links */}
          {mySocials && mySocials.length > 0 && (
            <nav className="flex gap-4" aria-label="Social Media">
              {mySocials.map((social, index) => (
                <a
                  href={social.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  className="transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
                >
                  {social.icon}
                </a>
              ))}
            </nav>
          )}

          {/* Copyright */}
          <div className="text-sm text-neutral-500">
            <p>&copy; {currentYear} {yourName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;