import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Corrected import for framer-motion

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false); // State to track if the email has been copied
  const email = "manishrajupreti@gmail.com"; // Your personalized email address

  // Function to copy the email address to the clipboard
  const copyToClipboard = () => {
    // Attempt to use the modern Clipboard API first.
    // Note: navigator.clipboard.writeText() might not work in all iframe environments.
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => {
          setCopied(true);
          // Reset the 'copied' state after 2 seconds
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy using Clipboard API:', err);
          // Fallback to document.execCommand if Clipboard API fails or is not available
          fallbackCopyToClipboard();
        });
    } else {
      // Fallback for older browsers or restricted environments
      fallbackCopyToClipboard();
    }
  };

  // Fallback method for copying text using document.execCommand
  const fallbackCopyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
    textarea.style.opacity = '0'; // Hide the textarea
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      // Reset the 'copied' state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
      // You might want to show a different alert here if the copy truly fails
    }
    document.body.removeChild(textarea);
  };


  return (
    // motion.button enables animation and interaction for the button
    <motion.button
      onClick={copyToClipboard} // Attach the copy function to the button click
      whileHover={{ y: -5 }} // Animate button to move up slightly on hover
      whileTap={{ scale: 1.05 }} // Animate button to scale up slightly on tap/click
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      {/* AnimatePresence allows components to animate when they are added or removed from the DOM */}
      <AnimatePresence mode="wait">
        {copied ? ( // Conditionally render based on the 'copied' state
          // Animation for when the email has been copied
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied" // Unique key for AnimatePresence
            initial={{ opacity: 0, y: -10 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation when component enters
            exit={{ opacity: 0, y: -10 }} // Animation when component exits
            transition={{ duration: 0.1, ease: "easeInOut" }} // Animation duration and easing
          >
            <img src="assets/copy-done.svg" className="w-5" alt="Copy done icon" /> {/* Icon for copied state */}
            Email has Copied
          </motion.p>
        ) : (
          // Animation for the default "Copy Email Address" state
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy" // Unique key for AnimatePresence
            initial={{ opacity: 0 }} // Initial animation state
            animate={{ opacity: 1 }} // Animation when component enters
            exit={{ opacity: 0 }} // Animation when component exits
            transition={{ duration: 0.1 }} // Animation duration
          >
            <img src="assets/copy.svg" className="w-5" alt="Copy icon" /> {/* Icon for copy state */}
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
