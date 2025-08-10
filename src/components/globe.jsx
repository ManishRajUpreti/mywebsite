"use client"; // This directive is often used in Next.js to mark a component as a Client Component.

import createGlobe from "cobe"; // Library for creating the interactive 3D globe
import { useMotionValue, useSpring } from "framer-motion"; // Corrected import for framer-motion hooks
import { useEffect, useRef } from "react"; // React hooks for managing side effects and references

import { twMerge } from "tailwind-merge"; // Utility to merge Tailwind CSS classes

// Damping factor for pointer interaction movement, makes the globe drag feel smoother
const MOVEMENT_DAMPING = 1400;

// Default configuration for the globe
const GLOBE_CONFIG = {
  width: 800, // Default width of the globe canvas
  height: 800, // Default height of the globe canvas
  onRender: () => {}, // Placeholder for custom render logic (filled in useEffect)
  devicePixelRatio: 2, // Improves rendering quality on high-DPI screens
  phi: 0, // Initial vertical rotation angle
  theta: 0.3, // Initial horizontal rotation angle
  dark: 1, // Dark mode setting (1 for dark, 0 for light)
  diffuse: 0.4, // Light diffusion intensity
  mapSamples: 16000, // Number of samples used to render the map
  mapBrightness: 1.2, // Brightness of the map texture
  baseColor: [1, 1, 1], // Base color of the globe (RGB values)
  markerColor: [1, 1, 1], // Color of the markers on the globe
  glowColor: [1, 1, 1], // Color of the glow effect around the globe
  markers: [
    // Array of markers to display on the globe, each with location (latitude, longitude) and size
    { location: [14.5995, 120.9842], size: 0.03 }, // Manila, Philippines
    { location: [19.076, 72.8777], size: 0.1 }, // Mumbai, India
    { location: [23.8103, 90.4125], size: 0.05 }, // Dhaka, Bangladesh
    { location: [30.0444, 31.2357], size: 0.07 }, // Cairo, Egypt
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing, China
    { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo, Brazil
    { location: [19.4326, -99.1332], size: 0.1 }, // Mexico City, Mexico
    { location: [40.7128, -74.006], size: 0.1 }, // New York City, USA
    { location: [34.6937, 135.5022], size: 0.05 }, // Osaka, Japan
    { location: [41.0082, 28.9784], size: 0.06 }, // Istanbul, Turkey
  ],
};

// Globe component that renders an interactive 3D globe with markers
export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0; // Vertical rotation angle, continuously updated for auto-rotation
  let width = 0; // Current width of the canvas, determined on resize
  const canvasRef = useRef(null); // Ref to attach to the canvas element for direct DOM access
  const pointerInteracting = useRef(null); // Ref to store the X coordinate when pointer interaction starts
  const pointerInteractionMovement = useRef(0); // Ref to store the movement delta during pointer interaction

  // useMotionValue to track the rotation change from pointer interaction
  const r = useMotionValue(0);
  // useSpring to create a smooth, spring-like animation for the rotation
  const rs = useSpring(r, {
    mass: 1, // Controls the "weight" of the spring
    damping: 30, // Controls how quickly the spring settles
    stiffness: 100, // Controls the spring's resistance to displacement
  });

  // Function to update the pointer interaction state and cursor style
  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      // Change cursor to 'grabbing' when interacting, 'grab' otherwise
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  // Function to calculate and update the globe's rotation based on pointer movement
  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current; // Calculate movement delta
      pointerInteractionMovement.current = delta;
      // Update the rotation MotionValue, scaled by MOVEMENT_DAMPING for sensitivity
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  // useEffect hook to initialize the globe and handle side effects
  useEffect(() => {
    // Function to handle window resize events
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth; // Get the current width of the canvas container
      }
    };

    window.addEventListener("resize", onResize); // Add resize listener
    onResize(); // Call once initially to set the width

    // Initialize the cobe globe on the canvas
    const globe = createGlobe(canvasRef.current, {
      ...config, // Spread the default or provided globe configuration
      width: width * 2, // Set canvas width (multiplied by 2 for retina display support)
      height: width * 2, // Set canvas height (multiplied by 2 for retina display support)
      onRender: (state) => {
        // This function runs on every frame render of the globe
        if (!pointerInteracting.current) phi += 0.005; // Auto-rotate if not interacting
        state.phi = phi + rs.get(); // Apply auto-rotation and spring-animated pointer rotation
        state.width = width * 2; // Ensure width is updated on each render
        state.height = width * 2; // Ensure height is updated on each render
      },
    });

    // Fade in the canvas after a short delay for a smoother load
    setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);

    // Cleanup function: destroy the globe instance and remove the resize listener when component unmounts
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]); // Dependencies: re-run effect if rs (spring) or config changes

  return (
    <div
      className={twMerge(
        "mx-auto aspect-[1/1] w-full max-w-[600px]", // Responsive sizing for the globe container
        className // Apply any additional classes passed to the component
      )}
    >
      <canvas
        className={twMerge(
          "size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]", // Initial styling for the canvas
        )}
        ref={canvasRef} // Attach the ref to the canvas element
        // Event handlers for mouse/pointer interactions
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX; // Store initial X position
          updatePointerInteraction(e.clientX); // Update interaction state
        }}
        onPointerUp={() => updatePointerInteraction(null)} // Reset interaction on pointer release
        onPointerOut={() => updatePointerInteraction(null)} // Reset interaction if pointer leaves canvas
        onMouseMove={(e) => updateMovement(e.clientX)} // Update movement on mouse move
        // Event handler for touch interactions
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX) // Update movement on touch move
        }
      />
    </div>
  );
}
