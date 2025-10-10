import { useRef, useEffect } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const myName = "Manish Raj Upreti";
  const yearsOfExperience = "a beginner";
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cardRefs.current.forEach((card) => {
        if (card && card.contains(e.target)) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          // Increased sensitivity by changing denominator from 20 to 12
          const rotateX = -(y - centerY) / 12; 
          const rotateY = (x - centerX) / 12;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else if (card) {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        }
      });
    };

    const section = document.getElementById("about");
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  
  // Animation variants
  const cardVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // stagger by index
        duration: 0.1,  // slow motion
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 auto-rows-[16rem] md:auto-rows-[18rem] mt-12">
        
        {/* Grid 1: Personal Introduction */}
        <motion.div 
          ref={el => cardRefs.current[0] = el}
          className="relative flex items-end p-6 overflow-hidden text-white rounded-lg bg-gray-800 md:col-span-3 transition-transform duration-150"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            src="assets/coding-pov.png"
            className="absolute inset-0 object-cover w-full h-full opacity-30"
            alt="A close-up view of a person's hands coding on a laptop." 
          />
          <div className="relative z-10">
            {/* Changed from text-4xl to text-3xl on mobile */}
            <p className="text-3xl font-bold md:text-4xl">Hi, I'm {myName}</p>
            {/* Changed from text-lg to text-base on mobile */}
            <p className="mt-2 text-base text-gray-300 md:text-lg">
              As {yearsOfExperience}, I'm passionate about learning frontend and backend development to build engaging web applications. I'm also actively exploring the fields of game development and Artificial Intelligence, always seeking new ways to create interactive and intelligent user experiences.
            </p>
          </div>
        </motion.div>

        {/* Grid 2: Core Principles */}
        <motion.div 
          ref={el => cardRefs.current[1] = el}
          className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-gray-700 md:col-span-3 transition-transform duration-150"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-blue-500/20 md:rounded-lg"></div>
          {/* Changed from text-3xl to text-2xl on mobile */}
          <h3 className="text-2xl font-bold md:text-3xl">Learning is a Craft</h3>
          {/* Changed from text-lg to text-base on mobile */}
          <p className="mt-2 text-center text-base text-gray-300 md:text-lg">
            I'm focusing on building a strong foundation with core principles and clean code.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {/* Changed from text-sm to text-xs on mobile */}
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/20 text-pink-300 md:text-sm">SOLID</span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/20 text-pink-300 md:text-sm">Design Patterns</span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/20 text-pink-300 md:text-sm">React</span>
          </div>
        </motion.div>

        {/* Grid 3: Time Zone and Location */}
        <motion.div 
          ref={el => cardRefs.current[2] = el}
          className="relative flex flex-col p-6 rounded-lg bg-black text-white md:col-span-2 transition-transform duration-150"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true, amount: 0.5 }}
        >
          <figure className="absolute inset-0 z-0 overflow-hidden md:rounded-lg">
            {/* ADJUSTMENT HERE: Added scale-75 for mobile */}
            <div className="absolute inset-0 right-0 -bottom-1/2 scale-75 md:scale-100 md:bottom-0">
              <Globe />
            </div>
          </figure>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Changed from text-3xl to text-2xl on mobile */}
            <p className="text-2xl font-bold md:text-3xl">My Location</p>
            {/* Changed from text-lg to text-base on mobile */}
            <p className="mt-2 text-base md:text-lg">
              I'm from Nepal, a country of immense natural beauty. It is renowned for its diverse landscapes, rich cultural heritage, and breathtaking Himalayan peaks.
            </p>
          </div>
        </motion.div>

        {/* Grid 4: Call to Action */}
        <motion.div 
          ref={el => cardRefs.current[3] = el}
          className="relative flex flex-col items-center justify-center p-6 text-center rounded-lg bg-gray-700 text-white md:col-span-2 transition-transform duration-150"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Changed from text-3xl to text-2xl on mobile */}
          <p className="text-2xl font-bold md:text-3xl">Let's Connect</p>
          {/* Changed from text-lg to text-base on mobile */}
          <p className="mt-2 text-base text-gray-300 md:text-lg">
            I'm always excited to work on new projects and ideas.
          </p>
          <div className="bg-blue-700 rounded-lg">
            <CopyEmailButton />
          </div>
        </motion.div>

        {/* Grid 5: Tech Stack */}
        <motion.div 
          ref={el => cardRefs.current[4] = el}
          className="relative flex flex-col p-6 rounded-lg bg-gray-800 text-white md:col-span-2 transition-transform duration-150"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          custom={4}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative z-10">
            {/* Changed from text-3xl to text-2xl on mobile */}
            <p className="text-2xl font-bold md:text-3xl">Tech Stack</p>
            {/* Changed from text-lg to text-base on mobile */}
            <p className="mt-2 text-base text-gray-300 md:text-lg">
              I'm specializing in frameworks and tools for building robust applications.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 md:scale-125">
            <Frameworks />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;