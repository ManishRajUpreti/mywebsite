import { motion, AnimatePresence } from "framer-motion"; // Corrected import for framer-motion

const Alert = ({ type, text }) => {
  // Define animation variants for the alert.
  // These control how the alert appears (hidden, visible) and disappears (exit).
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 }, // Initial state: invisible, moved down, slightly smaller
    visible: { opacity: 1, y: 0, scale: 1 }, // Visible state: fully opaque, original position and size
    exit: { opacity: 0, y: -50, scale: 0.8 }, // Exit state: fades out, moves up, slightly smaller
  };

  return (
    // AnimatePresence enables exit animations for components that are removed from the React tree.
    // It's crucial for the 'exit' variant to work when showAlert becomes false.
    <AnimatePresence>
      {/*
        motion.div is a Framer Motion component that allows for animations.
        It's positioned fixed at the bottom right of the screen.
      */}
      <motion.div
        className="fixed z-50 flex items-center justify-center bottom-5 right-5"
        initial="hidden" // Sets the initial animation state
        animate="visible" // Animates to this state when component mounts
        exit="exit" // Animates to this state when component unmounts (due to AnimatePresence)
        variants={alertVariants} // Links to the defined animation variants
        transition={{ duration: 0.3, ease: "easeInOut" }} // Defines the animation speed and easing
      >
        <div
          className={`p-2 ${
            // Dynamically apply background color based on alert type
            type === "danger" ? "bg-red-800" : "bg-royal"
          } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5`}
        >
          <p
            className={`flex rounded-full ${
              // Dynamically apply badge background color based on alert type
              type === "danger" ? "bg-red-500" : "bg-lavender"
            } uppercase px-2 py-1 text-xs font-semibold mr-3`}
          >
            {/* Display "Failed" or "Success" based on alert type */}
            {type === "danger" ? "Failed" : "Success"}
          </p>
          {/* Display the actual message text */}
          <p className="mr-2 text-left">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
