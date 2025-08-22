import React, { useState } from "react";
import ProjectDetails from "../components/ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  team,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="relative h-96 w-120 overflow-hidden rounded-xl transition-all duration-300 ease-in-out cursor-pointer group shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Conditional Image Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay for Readability */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Project Content */}
        <div className="relative h-full flex flex-col justify-end p-6 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          
          <p className="mb-4 text-sm text-neutral-300">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
            {tags.map((tag) => (
              <span key={tag.id} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                {tag.name}
              </span>
            ))}
          </div>

          <button
            onClick={() => setIsHidden(true)}
            className="flex items-center gap-1 mt-4 text-sm font-medium hover:text-white/80 transition-colors"
            aria-label={`Read more about ${title}`}
          >
            Read More
            <img src="assets/arrow-right.svg" className="w-4 h-4" alt="Right arrow icon" />
          </button>
        </div>
      </div>
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
          team={team}
        />
      )}
    </>
  );
};

export default Project;