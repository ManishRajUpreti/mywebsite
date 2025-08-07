import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion"; // Corrected import for framer-motion

const Projects = () => {
  // useMotionValue creates a MotionValue, which is a special state that
  // tracks the value of a property and allows Framer Motion to animate it.
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // useSpring creates a spring-based animation for a MotionValue.
  // This makes the mouse-following effect smooth and natural.
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  // handleMouseMove updates the x and y MotionValues based on the mouse position.
  // We add 20px to offset the image slightly from the cursor.
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  // useState to manage which project image is currently being previewed.
  // It will store the URL of the image.
  const [preview, setPreview] = useState(null);

  return (
    // Added id="projects" here to match a potential navigation link
    <section
      onMouseMove={handleMouseMove} // Attach the mouse move listener to the section
      className="relative c-space section-spacing"
      id="projects" // This ID makes the section a target for navigation links
    >
      <h2 className="text-heading">My Selected Projects</h2>
      {/* A horizontal line for visual separation */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {/* Map through the myProjects array to render each Project component */}
      {/* Each Project component receives its data and a function to set the preview image */}
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {/* Conditional rendering for the project preview image */}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview} // The source of the preview image
          style={{ x: springX, y: springY }} // Apply the spring-animated positions
          alt="Project preview" // Added descriptive alt text for accessibility
        />
      )}
    </section>
  );
};

export default Projects;
