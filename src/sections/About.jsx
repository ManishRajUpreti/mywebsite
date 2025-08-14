import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const myName = "Manish Raj Upreti"; // Use a variable for your name
  const yearsOfExperience = "a beginner"; // Or change this to a number later

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1: Personal Introduction */}
        <div className="relative flex items-end p-6 overflow-hidden text-white rounded-lg bg-gray-800 md:col-span-3">
          <img
            src="assets/coding-pov.png"
            className="absolute inset-0 object-cover w-full h-full opacity-30" // Simplified image styling
            alt="A close-up view of a person's hands coding on a laptop." // Added descriptive alt text
          />
          <div className="relative z-10">
            <p className="text-4xl font-bold md:text-5xl">Hi, I'm {myName}</p>
            <p className="mt-2 text-lg">
              As {yearsOfExperience}, I'm passionate about learning frontend and backend development to build engaging web applications.
            </p>
          </div>
        </div>

        {/* Grid 2: Core Principles (Simplified) */}
        <div className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-gray-700 md:col-span-3">
          <h3 className="text-3xl font-bold text-gray-400">Learning is a Craft</h3>
          <p className="mt-2 text-center text-lg text-gray-300">
            I'm focusing on building a strong foundation with core principles and clean code.
          </p>
          {/* You can add a few simple icons or text here to represent concepts like SOLID or Design Patterns */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-pink-500/20 text-pink-300">SOLID</span>
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-pink-500/20 text-pink-300">Design Patterns</span>
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-pink-500/20 text-pink-300">React</span>
          </div>
        </div>

        {/* Grid 3: Time Zone and Location */}
        <div className="relative flex flex-col p-6 rounded-lg bg-black text-white md:col-span-2">
          <div className="relative z-10">
            <p className="text-3xl font-bold">My Location</p>
            <p className="mt-2 text-lg">
              I'm based in Nepal.
            </p>
          </div>
          <figure className="absolute right-0 bottom-0 scale-75 md:scale-100">
            <Globe />
          </figure>
        </div>

        {/* Grid 4: Call to Action */}
        <div className="relative flex flex-col items-center justify-center p-6 text-center rounded-lg bg-blue-600 text-white md:col-span-2">
          <p className="text-3xl font-bold">Let's Connect</p>
          <p className="mt-2 text-lg">
            I'm always excited to work on new projects.
          </p>
          <CopyEmailButton />
        </div>

        {/* Grid 5: Tech Stack */}
        <div className="relative flex flex-col p-6 rounded-lg bg-gray-800 text-white md:col-span-2">
          <div className="relative z-10">
            <p className="text-3xl font-bold">Tech Stack</p>
            <p className="mt-2 text-lg">
              I'm specializing in frameworks and tools for building robust applications.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;