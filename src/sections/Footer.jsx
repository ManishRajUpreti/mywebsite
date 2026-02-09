import { Link } from "react-router-dom";
import { mySocials } from "../constants";

const Footer = () => {

  const currentYear = new Date().getFullYear();
  const yourName = "Manish Raj Upreti";

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 p-8">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <Link to="/terms" className="hover:text-white transition-colors duration-200">
          Terms & Conditions
        </Link>
        <p>|</p>
        <Link to="/privacy" className="hover:text-white transition-colors duration-200">
          Privacy Policy
        </Link>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to my ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p>&copy; {currentYear} {yourName}. All rights reserved.</p>
    </section>
  );
};

export default Footer;