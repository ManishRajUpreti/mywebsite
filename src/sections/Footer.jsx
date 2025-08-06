import { mySocials } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  const yourName = "Manish Raj Upreti"; // Your full name for the copyright

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        {/* These links are placeholders. You'll want to create actual pages for them. */}
        <a href="/terms" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
        <p>|</p>
        <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            aria-label={`Link to my ${social.name}`} // Accessibility: describes the link purpose
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      {/* Personalized copyright with dynamic year */}
      <p>&copy; {currentYear} {yourName}. All rights reserved.</p>
    </section>
  );
};

export default Footer;
