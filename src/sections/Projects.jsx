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
        duration: 0.1,  // slow motion
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative c-space section-spacing"
      id="projects"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      <motion.div 
        className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-2"
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true, amount: 0.5 }}
      >
        {myProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;