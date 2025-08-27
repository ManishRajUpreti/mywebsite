"use client"; // Mark this as a Client Component if you're using Next.js

import React, { useEffect, useRef, useState } from "react";
// useMotionValue and useSpring are not directly used in this component's logic,
// but they might be remnants from a previous version or intended for future use.
// If they are not used, they can be removed. I'll keep them for now but note the import correction.
import { useMotionValue, useSpring } from "framer-motion"; // Corrected import for framer-motion

import { twMerge } from "tailwind-merge"; // Utility to merge Tailwind CSS classes

// Helper hook to get the current mouse position
function MousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return mousePosition;
}

// Helper function to convert a hex color string to an RGB array
function hexToRgb(hex) {
  hex = hex.replace("#", ""); // Remove the '#' prefix

  // Handle shorthand hex codes (e.g., #FFF -> #FFFFFF)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Parse the hex string into an integer and extract R, G, B components
  const hexInt = parseInt(hex, 16);
  const red = (hexInt >> 16) & 255;
  const green = (hexInt >> 8) & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}

export const Particles = ({
  className = "", // Additional CSS classes for the container
  quantity = 400, // Number of particles
  staticity = 50, // How much particles resist mouse movement (higher = less movement)
  ease = 150, // How smoothly particles follow the mouse (higher = slower follow)
  size = 0.4, // Base size of the particles
  refresh = false, // Trigger a re-initialization of particles
  color = "#ffffff", // Color of the particles in hex
  vx = 0, // Initial velocity in x-direction (unused in current logic, but available)
  vy = 0, // Initial velocity in y-direction (unused in current logic, but available)
  ...props // Any additional props passed to the container div
}) => {
  const canvasRef = useRef(null); // Ref for the HTML canvas element
  const canvasContainerRef = useRef(null); // Ref for the canvas's parent container
  const context = useRef(null); // Ref for the 2D rendering context of the canvas
  const circles = useRef([]); // Ref to store an array of particle objects
  const mousePosition = MousePosition(); // Custom hook to get real-time mouse position
  const mouse = useRef({ x: 0, y: 0 }); // Ref to store mouse position relative to canvas center
  const canvasSize = useRef({ w: 0, h: 0 }); // Ref to store canvas dimensions
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1; // Device Pixel Ratio for retina displays
  const rafID = useRef(null); // Ref to store the requestAnimationFrame ID for cleanup
  const resizeTimeout = useRef(null); // Ref for debounce timeout on resize

  // Primary useEffect for canvas initialization and animation loop setup
  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d"); // Get 2D rendering context
    }
    initCanvas(); // Initialize canvas size and draw initial particles
    animate(); // Start the animation loop

    // Event listener for window resize to re-initialize canvas
    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(() => {
        initCanvas(); // Debounce resize to prevent excessive re-renders
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function: stop animation and remove event listener on unmount
    return () => {
      if (rafID.current != null) {
        window.cancelAnimationFrame(rafID.current);
      }
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [color]); // Re-run effect if 'color' prop changes

  // useEffect to update internal mouse position when global mouse position changes
  useEffect(() => {
    onMouseMove();
  }, [mousePosition.x, mousePosition.y]); // Dependencies: mousePosition x and y

  // useEffect to re-initialize canvas when 'refresh' prop changes
  useEffect(() => {
    initCanvas();
  }, [refresh]); // Dependency: 'refresh' prop

  // Initializes canvas dimensions and draws particles
  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  // Calculates mouse position relative to the canvas center
  const onMouseMove = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      // Calculate mouse position relative to the center of the canvas
      const x = mousePosition.x - rect.left - w / 2;
      const y = mousePosition.y - rect.top - h / 2;
      // Check if mouse is inside the canvas bounds
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  };

  // Resizes the canvas element to match its container and adjusts for device pixel ratio
  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;

      // Set canvas dimensions, scaled by device pixel ratio for sharpness
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      // Set CSS dimensions to maintain visual size
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      // Scale the context to match the device pixel ratio
      context.current.scale(dpr, dpr);

      // Clear existing particles and create new ones with exact quantity
      circles.current = [];
      for (let i = 0; i < quantity; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
    }
  };

  // Generates parameters for a single particle (circle)
  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w); // Random initial x position
    const y = Math.floor(Math.random() * canvasSize.current.h); // Random initial y position
    const translateX = 0; // Current x translation due to mouse interaction
    const translateY = 0; // Current y translation due to mouse interaction
    const pSize = Math.floor(Math.random() * 2) + size; // Random size based on base size
    const alpha = 0; // Initial transparency (fades in)
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)); // Target transparency
    const dx = (Math.random() - 0.5) * 0.1; // Random initial x velocity
    const dy = (Math.random() - 0.5) * 0.1; // Random initial y velocity
    const magnetism = 0.1 + Math.random() * 4; // How strongly the particle is attracted to mouse
    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const rgb = hexToRgb(color); // Convert particle color to RGB once

  // Draws a single circle on the canvas
  const drawCircle = (circle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY); // Apply translation for mouse interaction
      context.current.beginPath(); // Start drawing a new path
      context.current.arc(x, y, size, 0, 2 * Math.PI); // Draw a circle arc
      context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`; // Set fill color with alpha
      context.current.fill(); // Fill the circle
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0); // Reset transformation matrix
      // If not an update, add the circle to the array of active circles
      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  // Clears the entire canvas
  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      );
    }
  };

  // Draws all initial particles
  const drawParticles = () => {
    clearContext(); // Clear canvas before drawing
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams(); // Get parameters for a new circle
      drawCircle(circle); // Draw the circle
    }
  };

  // Remaps a value from one range to another
  const remapValue = (value, start1, end1, start2, end2) => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0; // Ensure remapped value is not negative
  };

  // Main animation loop
  const animate = () => {
    clearContext(); // Clear canvas for the new frame
    circles.current.forEach((circle, i) => {
      // Handle the alpha (fade-in/fade-out) based on distance to edges
      const edge = [
        circle.x + circle.translateX - circle.size, // distance from left edge
        canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
        circle.y + circle.translateY - circle.size, // distance from top edge
        canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b)); // Find the closest edge
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      ); // Remap distance to alpha value

      // Adjust particle alpha for fade-in/out effect near edges
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02; // Fade in
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge; // Fade out based on edge proximity
      }

      // Update particle position based on its own velocity and global velocity
      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;

      // Update particle translation based on mouse position (magnetism effect)
      circle.translateX +=
        (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
        ease;
      circle.translateY +=
        (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
        ease;

      drawCircle(circle, true); // Redraw the updated circle

      // If a circle moves out of the canvas, remove it and create a new one
      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1); // Remove the old circle
        const newCircle = circleParams(); // Create new parameters
        drawCircle(newCircle); // Draw the new circle
      }
    });
    rafID.current = window.requestAnimationFrame(animate); // Request next animation frame
  };

  return (
    <div
      className={twMerge("pointer-events-none", className)} // Ensure the div doesn't capture pointer events
      ref={canvasContainerRef} // Ref for the container to get its dimensions
      aria-hidden="true" // Hide this decorative element from assistive technologies
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" /> {/* The HTML canvas element */}
    </div>
  );
};
