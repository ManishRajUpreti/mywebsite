import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei"; // Float component for subtle floating animation
import { useMediaQuery } from "react-responsive"; // Hook to check screen size
import { easing } from "maath"; // Library for smooth mathematical easing
// import { motion } from "motion/react"; // This import is not used in this component, so it's removed.

import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut"; // Your 3D Astronaut model component
import Loader from "../components/Loader"; // Loader component for Suspense fallback

const Hero = () => {
  // Check if the screen width is less than or equal to 853px (typical mobile breakpoint)
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="hero">
      {/* Component to display your main hero text */}
      <HeroText />
      {/* Component for the parallax background effect */}
      <ParallaxBackground />

      {/* Figure element to contain the 3D canvas, ensuring it covers the full viewport */}
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/*
          Canvas is the main component from @react-three/fiber that sets up the WebGL renderer.
          camera: Defines the initial position of the camera in the 3D scene.
        */}
        <Canvas camera={{ position: [0, 1, 3] }}>
          {/*
            Suspense allows you to display a fallback (like a loading spinner)
            while components (like the 3D Astronaut model) are loading asynchronously.
          */}
          <Suspense fallback={<Loader />}>
            {/*
              Float component from @react-three/drei gives its children a subtle,
              natural-looking floating animation.
            */}
            <Float>
              {/*
                Astronaut model component. Its scale and position are adjusted
                based on whether the user is on a mobile device.
              */}
              <Astronaut
                scale={isMobile ? 0.23 : 1} // Scale down for mobile, keep original for desktop
                position={isMobile ? [0, -1.5, 0] : [0, 0, 0]} // Adjust position for mobile
              />
            </Float>
            {/* Rig component handles camera movement based on mouse input */}
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

// Rig component controls the camera's position based on mouse movement
function Rig() {
  // useFrame hook runs on every frame render, allowing for continuous animations
  return useFrame((state, delta) => {
    // easing.damp3 smoothly interpolates the camera's position towards the target.
    // state.camera.position: The current camera position.
    // [state.mouse.x / 10, 1 + state.mouse.y / 10, 3]: The target position,
    //   influenced by mouse X and Y coordinates to create a subtle parallax effect.
    // 0.5: The damping factor (how quickly it moves towards the target).
    // delta: The time elapsed since the last frame, for frame-rate independent animation.
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
