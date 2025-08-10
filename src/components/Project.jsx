import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails"; // Assuming ProjectDetails is a modal or detailed view component

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
