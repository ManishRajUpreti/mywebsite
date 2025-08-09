"use client"; // This directive is often used in Next.js to mark a component as a Client Component.

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Corrected import for framer-motion
import { twMerge } from "tailwind-merge"; // Utility to merge Tailwind CSS classes

export const FlipWords = ({ words, duration = 3000, className }) => {
  // State to keep track of the currently displayed word.
  const [currentWord, setCurrentWord] = useState(words[0]);
  // State to indicate if an animation is currently in progress.
  const [isAnimating, setIsAnimating] = useState(false);

  // useCallback memoizes the startAnimation function to prevent unnecessary re-renders.
  // This function cycles through the 'words' array.
  const startAnimation = useCallback(() => {
    // Find the index of the current word.
    const currentIndex = words.indexOf(currentWord);
    // Determine the next word, cycling back to the first word if at the end of the array.
    const nextWord = words[currentIndex + 1] || words[0];
    setCurrentWord(nextWord); // Update the current word
    setIsAnimating(true); // Set animation flag to true
  }, [currentWord, words]); // Dependencies: currentWord and words array

  // useEffect hook to manage the animation timing.
  // It triggers the next word animation after 'duration' milliseconds,
  // but only if no animation is currently running.
  useEffect(() => {
    if (!isAnimating) {
      const timeoutId = setTimeout(() => {
        startAnimation();
      }, duration);
      // Cleanup function to clear the timeout if the component unmounts or dependencies change.
      return () => clearTimeout(timeoutId);
    }
  }, [isAnimating, duration, startAnimation]); // Dependencies: isAnimating, duration, startAnimation

  return (
    // AnimatePresence is a Framer Motion component that enables exit animations
    // for components that are removed from the React tree.
    <AnimatePresence
      // onExitComplete is called when an exiting animation completes.
      // We use it to reset the 'isAnimating' flag so the next animation can start.
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      {/*
        motion.div is the container for the current word.
        It animates its appearance and disappearance.
      */}
      <motion.div
        // Initial state for the word when it enters.
        initial={{
          opacity: 0,
          y: 10,
        }}
        // Animation to apply when the word is visible.
        animate={{
          opacity: 1,
          y: 0,
        }}
        // Transition properties for the enter animation.
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        // Exit animation for the word when it leaves.
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute", // Important for exit animation to not affect layout
        }}
        // Tailwind classes merged with any custom classes passed in.
        className={twMerge("z-10 inline-block relative text-left", className)}
        // Key prop is crucial for AnimatePresence to track component changes
        // and trigger exit/enter animations correctly.
        key={currentWord}
      >
        {/*
          Split the current word by spaces to animate each word part.
          This allows for a more granular animation effect.
        */}
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex} // Unique key for each word part
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }} // Initial state for word part
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Animation for word part
            transition={{
              delay: wordIndex * 0.3, // Stagger animation for each word part
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap" // Keep words on a single line
          >
            {/*
              Split each word part into individual letters to animate them.
              This creates a "typing" or "revealing" effect.
            */}
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex} // Unique key for each letter
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }} // Initial state for letter
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Animation for letter
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05, // Stagger animation for each letter
                  duration: 0.2,
                }}
                className="inline-block" // Keep letters inline
              >
                {letter}
              </motion.span>
            ))}
            {/* Add a non-breaking space after each word part to maintain spacing */}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
