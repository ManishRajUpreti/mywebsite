"use client"; // Mark this as a Client Component if you're using Next.js

import { twMerge } from "tailwind-merge"; // Utility to merge Tailwind CSS classes
import React from "react"; // Explicitly import React

export function OrbitingCircles({
  className,
  children, // The elements that will orbit (e.g., skill icons)
  reverse, // If true, the circles orbit in reverse direction
  duration = 20, // Duration of one full orbit in seconds
  radius = 160, // Radius of the orbit path in pixels
  path = true, // If true, a visible circle path is rendered
  iconSize = 30, // Size of the orbiting icons in pixels
  speed = 1, // Multiplier for the animation duration (higher speed means faster orbit)
  ...props // Any additional props passed to the main div
}) {
  // Calculate the actual duration of the animation based on the speed multiplier
  const calculatedDuration = duration / speed;

  return (
    <>
      {/* Conditionally render the circular path */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none size-full" // SVG takes full size, ignores pointer events
        >
          <circle
            className="stroke-1 stroke-white/10" // Tailwind classes for stroke
            cx="50%" // Center X of the circle
            cy="50%" // Center Y of the circle
            r={radius} // Radius of the circle path
            fill="none" // No fill for the circle, just the stroke
          />
        </svg>
      )}

      {/*
        Map over the children to create individual orbiting elements.
        React.Children.map ensures that 'children' (even if it's a single element)
        is treated as an array, allowing us to iterate over it.
      */}
      {React.Children.map(children, (child, index) => {
        // Calculate the starting angle for each child to distribute them evenly around the circle
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            key={index} // Using index as key is acceptable here as the children order is static
            style={{
              // CSS variables are used to pass dynamic values to Tailwind's JIT compiler
              "--duration": `${calculatedDuration}s`, // Animation duration
              "--radius": `${radius}px`, // Orbit radius
              "--angle": `${angle}deg`, // Starting angle for positioning
              "--icon-size": `${iconSize}px`, // Size of the icon container
            }}
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full ${
                // Apply reverse animation direction if 'reverse' prop is true
                reverse ? "[animation-direction:reverse]" : ""
              }`,
              className // Apply any custom classes passed to the component
            )}
            {...props} // Spread any additional props to this div
          >
            {child} {/* Render the actual orbiting child (e.g., an Icon component) */}
          </div>
        );
      })}
    </>
  );
}
