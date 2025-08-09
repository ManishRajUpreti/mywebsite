"use client"; // Mark this as a Client Component if you're using Next.js

import { OrbitingCircles } from "./OrbitingCircles"; // Assuming this is your component for the orbiting animation
import React from "react"; // Explicitly import React

export function Frameworks() {
  // Define your skills. These strings will be used to construct image paths.
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* First set of orbiting circles */}
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          // Using 'skill' directly as the key is safe here because the 'skills' array is static
          // and each skill string is unique.
          <Icon key={skill} src={`assets/logos/${skill}.svg`} alt={`${skill} logo`} />
        ))}
      </OrbitingCircles>

      {/* Second set of orbiting circles, reversed and with different properties */}
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {/*
          IMPORTANT: .reverse() modifies the array in place.
          To avoid modifying the original 'skills' array, we create a shallow copy
          using [...skills] before reversing it.
        */}
        {[...skills].reverse().map((skill) => (
          // Using 'skill' directly as the key is safe here.
          <Icon key={skill} src={`assets/logos/${skill}.svg`} alt={`${skill} logo`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

// Icon component to render each skill logo
const Icon = ({ src, alt }) => (
  <img
    src={src}
    className="duration-200 rounded-sm hover:scale-110"
    alt={alt} // Added alt text for accessibility
  />
);
