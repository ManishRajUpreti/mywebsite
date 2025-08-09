import { motion } from "framer-motion"; // Corrected import for framer-motion

// The Card component can render either an image or text,
// and it's draggable within a specified container.
const Card = ({ style, text, image, containerRef }) => {
  // Conditional rendering: If 'image' is provided and 'text' is not, render an image.
  // Otherwise, render a div with text.
  return image && !text ? (
    // motion.img enables animation and drag functionality for the image.
    <motion.img
      className="absolute w-15 cursor-grab" // Tailwind classes for styling
      src={image} // Source URL for the image
      style={style} // Apply any inline styles passed via props
      whileHover={{ scale: 1.05 }} // Scale up slightly on hover
      drag // Enables dragging functionality
      dragConstraints={containerRef} // Constrains dragging within the bounds of the containerRef element
      dragElastic={1} // Makes the drag feel elastic, allowing it to go slightly beyond constraints
      alt={text || "Decorative image"} // Added alt text for accessibility, using 'text' if available
    />
  ) : (
    // motion.div enables animation and drag functionality for the text card.
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab" // Tailwind classes for styling
      style={style} // Apply any inline styles passed via props
      whileHover={{ scale: 1.05 }} // Scale up slightly on hover
      drag // Enables dragging functionality
      dragConstraints={containerRef} // Constrains dragging within the bounds of the containerRef element
      dragElastic={1} // Makes the drag feel elastic, allowing it to go slightly beyond constraints
    >
      {text} {/* Display the text content */}
    </motion.div>
  );
};

export default Card;
