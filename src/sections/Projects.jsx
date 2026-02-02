import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const cardVariant = {
    hidden: {
      opacity: 0,
      x: "-10%", // mobile-safe (no horizontal overflow)
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08, // smooth stagger
        duration: 0.3,   // visible even on low-end phones
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      id="projects"
      className="relative c-space section-spacing overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-heading">My Selected Projects</h2>

      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
        {myProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.15 }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
