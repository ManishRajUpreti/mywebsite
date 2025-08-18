import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion"; // Corrected import for framer-motion

const HeroText = () => {
  // Words to be used in the FlipWords animation
  const words = ["Secure", "Modern", "Scalable"];
  // Variants for Framer Motion animations (hidden and visible states)
  const variants = {
    hidden: { opacity: 0, x: -50 }, // Starts invisible and shifted left
    visible: { opacity: 1, x: 0 }, // Animates to visible and original position
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View - Hidden on small screens, visible on medium and larger */}
      <div className="hidden flex-col md:flex c-space">
        {/* Animated heading for desktop */}
        <motion.h1
          className="text-4xl font-medium"
          variants={variants} // Apply defined animation variants
          initial="hidden" // Start from the 'hidden' state
          animate="visible" // Animate to the 'visible' state
          transition={{ delay: 1 }} // Delay the animation start by 1 second
        >
          Hi, I'm an
        </motion.h1>
        <div className="flex flex-col items-start">
          {/* Animated paragraph for desktop */}
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }} // Slightly delayed animation
          >
            Aspiring Developer <br /> Passionate about Crafting
          </motion.p>
          {/* Container for the FlipWords component, also animated */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }} // Further delayed animation
          >
            {/* FlipWords component for animated word transitions */}
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          {/* Another animated paragraph for desktop */}
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }} // Last in the sequence for desktop
          >
            Web Platforms
          </motion.p>
        </div>
      </div>

      {/* Mobile View - Visible on small screens, hidden on medium and larger */}
      <div className="flex flex-col space-y-6 md:hidden">
        {/* Animated paragraph for mobile */}
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm
        </motion.p>
        <div>
          {/* Animated paragraph for mobile */}
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Passionate About Crafting
          </motion.p>
          {/* Container for the FlipWords component, also animated */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            {/* FlipWords component for animated word transitions */}
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          {/* Another animated paragraph for mobile */}
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Platforms
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
