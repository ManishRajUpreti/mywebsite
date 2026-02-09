import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <p className="text-neutral-400 mb-6">Last Updated: February 8, 2026</p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-3 text-blue-400">Open Source Notice</h3>
          <p className="text-neutral-300 leading-relaxed">
            This website is built using open-source code licensed under the MIT License. The source
            code is freely available on{" "}
            <a
              href="https://github.com/ManishRajUpreti/mywebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              GitHub
            </a>
            . You are welcome to use, modify, and distribute the code according to the terms of the
            MIT License.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-neutral-300 leading-relaxed">
            By accessing and using this portfolio website, you acknowledge and agree to these terms
            of use. This website is provided for informational and demonstration purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Open Source License</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            The source code for this website is licensed under the MIT License. You are free to:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Use the code for personal or commercial projects</li>
            <li>Modify and customize the code for your needs</li>
            <li>Distribute copies of the original or modified code</li>
            <li>Create derivative works based on this code</li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mt-4">
            The only requirement is that you include the original copyright notice and license in
            any substantial portions of the code you use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Content Usage</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            While the code is open source, please note:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>
              Personal content (text, images, project descriptions) is specific to the portfolio
              owner and should be replaced with your own content
            </li>
            <li>
              Third-party assets (3D models, icons, libraries) may have their own licenses - please
              check their individual terms
            </li>
            <li>The design and code structure is free to use under the MIT License</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. "As Is" Basis</h2>
          <p className="text-neutral-300 leading-relaxed">
            This website and its source code are provided "as is" without warranty of any kind,
            either express or implied. The creator makes no guarantees about the accuracy,
            reliability, or suitability of the code or content for any particular purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-neutral-300 leading-relaxed">
            In no event shall the website owner be liable for any damages arising from the use or
            inability to use this website or its source code, including but not limited to direct,
            indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
          <p className="text-neutral-300 leading-relaxed">
            This website may contain links to external websites and services. These links are
            provided for convenience only. I am not responsible for the content, privacy practices,
            or terms of service of any third-party websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contributions</h2>
          <p className="text-neutral-300 leading-relaxed">
            If you wish to contribute to this open-source project, please review the CONTRIBUTING.md
            file in the GitHub repository. By submitting contributions, you agree that your
            contributions will be licensed under the same MIT License.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="text-neutral-300 leading-relaxed">
            These terms may be updated from time to time. Continued use of the website after changes
            constitutes acceptance of the revised terms. The "Last Updated" date at the top will
            reflect when changes were made.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
          <p className="text-neutral-300 leading-relaxed">
            For questions about these terms, the open-source license, or anything else, please feel
            free to contact me through the contact form on this website or open an issue on GitHub.
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

export default TermsPage;


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]