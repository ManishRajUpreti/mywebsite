import React, { useState } from "react";
// ProjectDetails component is now defined within this file

const Project = ({
  title,
  description,
  subDescription,
  href, // Link to the live project or repository
  image, // Image for the project preview
  tags, // Array of technologies/tags used
  setPreview, // Function from parent to set the preview image on hover
}) => {
  // State to control the visibility of the ProjectDetails modal
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        // Event handlers for showing/hiding the project preview image on hover
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          {/* Project title */}
          <p className="text-2xl">{title}</p>
          {/* Display project tags/technologies */}
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              // Using tag.id as key for unique identification
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        {/* Button to open the ProjectDetails modal */}
        <button
          onClick={() => setIsHidden(true)} // Set isHidden to true to show the modal
          className="flex items-center gap-1 cursor-pointer hover-animation"
          aria-label={`Read more about ${title}`} // Added aria-label for accessibility
        >
          Read More
          {/* Arrow icon for the "Read More" button */}
          <img src="assets/arrow-right.svg" className="w-5" alt="Right arrow icon" /> {/* Added alt text */}
        </button>
      </div>
      {/* Horizontal line for visual separation between projects */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Conditionally render the ProjectDetails modal if isHidden is true */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)} // Function to close the modal
        />
      )}
    </>
  );
};

export default Project;

// --- ProjectDetails Component ---

import { motion } from "framer-motion"; // Corrected import for framer-motion

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    // Overlay for the modal, covers the entire screen, with a backdrop blur
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      {/*
        Motion.div for the modal content itself, with entry animation.
        It's centered and styled with a gradient background and shadow.
      */}
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }} // Initial state: invisible, scaled down
        animate={{ opacity: 1, scale: 1 }} // Animation to visible, full scale
      >
        {/* Close button for the modal */}
        <button
          onClick={closeModal} // Calls the closeModal function passed from parent
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
          aria-label="Close project details" // Accessibility: describes the button's purpose
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="Close icon" /> {/* Close icon */}
        </button>
        {/* Project image displayed at the top of the modal */}
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          {/* Project title */}
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          {/* Main description of the project */}
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {/* Detailed sub-descriptions, mapped as individual paragraphs */}
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p> // Added key for list items
          ))}
          <div className="flex items-center justify-between mt-4">
            {/* Project tags/technologies with their logos */}
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id} // Unique key for each tag logo
                  src={tag.path} // Path to the tag logo
                  alt={tag.name} // Alt text for accessibility
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            {/* Link to view the live project or repository */}
            <a
              href={href} // The actual link URL
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
              aria-label={`View live project: ${title}`} // Accessibility: describes the link purpose
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-4" alt="Arrow pointing up" /> {/* Icon for external link */}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
