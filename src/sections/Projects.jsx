import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const cardVariant = {
    hidden: { opacity: 0, x: -300 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // stagger by index
        duration: 0.5,  // Increased duration for a smoother entrance
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      // This section motion is fine for the whole container fade-in
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative c-space section-spacing"
      id="projects"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {/* FIX: Removed motion.div and its animation props from the grid container.
               We want the grid itself to be static, but its children (the cards) to animate. */}
      <div 
        className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-2"
      >
        {myProjects.map((project, index) => (
          // FIX: Applied motion.div wrapper, variants, and custom index to each Project
          <motion.div
            key={project.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            custom={index} // Pass the index for the stagger effect
            viewport={{ once: true, amount: 0.2 }} // Reduce amount to trigger earlier
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;