import { Link } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-neutral-400 mb-6">Last Updated: February 8, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-neutral-300 leading-relaxed">
            Welcome to my portfolio website. This Privacy Policy explains how I collect, use, and
            protect your information when you visit this website. I am committed to ensuring that
            your privacy is protected.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information I Collect</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When you visit this website, I may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>
              <strong>Contact Information:</strong> When you submit a contact form, I collect your
              name, email address, and message content.
            </li>
            <li>
              <strong>Usage Data:</strong> I may collect information about how you interact with
              this website, including pages visited, time spent on pages, and navigation patterns.
            </li>
            <li>
              <strong>Technical Data:</strong> I may collect your IP address, browser type and
              version, device type, and operating system.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How I Use Your Information</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            I use the information I collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>To respond to your inquiries and contact requests</li>
            <li>To improve and optimize the website experience</li>
            <li>To analyze website traffic and usage patterns</li>
            <li>To detect and prevent technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="text-neutral-300 leading-relaxed">
            This website may use cookies and similar tracking technologies to enhance your browsing
            experience. Cookies are small files stored on your device that help me remember your
            preferences and understand how you use the website. You can control cookie settings
            through your browser preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="text-neutral-300 leading-relaxed">
            I am committed to ensuring that your information is secure. I have implemented
            appropriate technical and organizational measures to safeguard and secure the information
            I collect. However, no method of transmission over the internet or electronic storage is
            100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
          <p className="text-neutral-300 leading-relaxed">
            This website may use third-party services such as analytics tools or email services to
            process your information. These third parties have their own privacy policies and I am
            not responsible for their practices. Please review their privacy policies before
            providing any information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Request access to the personal information I hold about you</li>
            <li>Request correction of any inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of any marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Links to Other Websites</h2>
          <p className="text-neutral-300 leading-relaxed">
            This website may contain links to other websites. I am not responsible for the privacy
            practices or content of those external sites. I encourage you to read the privacy
            policies of any external sites you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
          <p className="text-neutral-300 leading-relaxed">
            This website is not intended for children under the age of 13. I do not knowingly
            collect personal information from children under 13. If you are a parent or guardian and
            believe your child has provided personal information, please contact me.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
          <p className="text-neutral-300 leading-relaxed">
            I may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated revision date. I encourage you to review this Privacy Policy
            periodically to stay informed about how I am protecting your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Me</h2>
          <p className="text-neutral-300 leading-relaxed">
            If you have any questions about this Privacy Policy or how I handle your information,
            please feel free to contact me through the contact form on this website.
          </p>
        </section>

        <div className="mt-12">
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
