import { mySocials } from "../constants";

const Footer = () => {
  // Define the social media data with inline SVG icons.
  const mySocials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/manishrajupreti",
      // Inline SVG for the LinkedIn icon with its brand color
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#0A66C2"
          className="w-5 h-5 transition-transform duration-200 transform hover:scale-125"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3Zm-1.5-10.48h-.024c-1.127 0-1.84 0-.46-1.22c.57-1.124 1.58-.98 2.05-.18a2.53 2.53 0 0 1 .43.23a2.53 2.53 0 0 1 .43.23c.47.8 1.48.94 2.05.18a.33.33 0 0 0-.46-1.22c-1.27.05-2.22-.38-2.92-.38-.7 0-1.65.43-2.92.49ZM19 19h-3v-5.69c0-1.04-.56-2.12-1.92-2.12-1.36 0-1.84 1.12-1.84 2.12V19h-3V10h3v1.39a4.84 4.84 0 0 1 3.5-1.92c3.55 0 3.86 2.44 3.86 5.61V19Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/manishrajupreti",
      // Corrected inline SVG for the Instagram icon with a gradient fill
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5 transition-transform duration-200 transform hover:scale-125"
        >
          <defs>
            <linearGradient id="instagram-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#feda75' }} />
              <stop offset="10%" style={{ stopColor: '#fa7e1e' }} />
              <stop offset="25%" style={{ stopColor: '#d62976' }} />
              <stop offset="50%" style={{ stopColor: '#962fbf' }} />
              <stop offset="100%" style={{ stopColor: '#4f5bd5' }} />
            </linearGradient>
          </defs>
          <path fill="url(#instagram-gradient-2)" d="M12 2.163c3.204 0 3.584.013 4.85.07c3.252.148 4.771 1.691 4.919 4.919.057 1.267.07 1.647.07 4.85s-.013 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.647.07-4.85.07s-3.583-.013-4.85-.07c-3.251-.149-4.771-1.691-4.919-4.919-.058-1.266-.07-1.647-.07-4.85s.013-3.583.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.647-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.35 0-6.273 1.95-6.425 6.425-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.152 4.35 1.95 6.273 6.425 6.425 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.35-.152 6.273-1.95 6.425-6.425.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.152-4.35-1.95-6.273-6.425-6.425-1.28-.058-1.688-.072-4.947-.072zm0 7.84a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32zm0 6.64a2.48 2.48 0 1 1 0-4.96 2.48 2.48 0 0 1 0 4.96zm8.176-11.832a.896.896 0 1 0-.001-1.792.896.896 0 0 0 .001 1.792z" />
        </svg>
      ),
    },
  ];

  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  const yourName = "Manish Raj Upreti"; // Your full name for the copyright

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 p-8">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        {/* These links are placeholders for your actual pages */}
        <a href="/terms" className="hover:text-white transition-colors duration-200">
          Terms & Conditions
        </a>
        <p>|</p>
        <a href="/privacy" className="hover:text-white transition-colors duration-200">
          Privacy Policy
        </a>
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
            {/* Render the icon component directly */}
            {social.icon}
          </a>
        ))}
      </div>
      {/* Personalized copyright with dynamic year */}
      <p>&copy; {currentYear} {yourName}. All rights reserved.</p>
    </section>
  );
};

export default Footer;