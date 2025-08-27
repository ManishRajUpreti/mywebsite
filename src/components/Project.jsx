import React, { useState, useRef, useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  team,
  borderColor = "border-blue-500", // Default border color
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 12;
      const rotateY = (x - centerX) / 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };

    const resetRotate = () => {
      if (card) {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      }
    };

    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", resetRotate);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", resetRotate);
      }
    };
  }, []);

  return (
    <>
      {/* Outer wrapper handles the transform */}
      <div ref={cardRef} className="transition-transform duration-150">
        {/* Inner card preserves rounded corners */}
        <div
          className={`relative h-96 overflow-hidden rounded-xl cursor-pointer group shadow-lg border-2 ${borderColor}`}
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

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>

            <p className="mb-4 text-sm text-neutral-300">{description}</p>

            <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full"
                >
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
              <img
                src="assets/arrow-right.svg"
                className="w-4 h-4"
                alt="Right arrow icon"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
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
