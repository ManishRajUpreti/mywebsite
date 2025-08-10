import { motion, useScroll, useSpring, useTransform } from "framer-motion"; // Corrected import for framer-motion

const ParallaxBackground = () => {
  // useScroll hook tracks the scroll progress of the window.
  // scrollYProgress is a MotionValue that goes from 0 to 1 as the user scrolls.
  const { scrollYProgress } = useScroll();

  // useSpring creates a smoothly animated MotionValue from scrollYProgress.
  // This helps to make the parallax effect feel more fluid and natural.
  const x = useSpring(scrollYProgress, { damping: 50 });

  // useTransform maps the scroll progress (0 to 1) to different output ranges
  // for each layer, creating the parallax effect.
  // The second array [0, 0.5] means the transformation happens over the first
  // half of the scrollable area.

  // mountain3Y: Moves the furthest mountain layer significantly (70% of its height)
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  // planetsX: Moves the planets layer horizontally (-20% of its width)
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  // mountain2Y: Moves the middle mountain layer moderately (30% of its height)
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  // mountain1Y: The closest mountain layer moves least or not at all (0%)
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    // Main section for the parallax background.
    // bg-black/40 adds a semi-transparent black overlay for atmosphere.
    <section className="absolute inset-0 bg-black/40">
      {/* Container for the parallax layers, hiding overflow to prevent scrollbars */}
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky Layer */}
        {/* -z-50 ensures it's at the very back */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)", // Your sky image
            backgroundPosition: "bottom", // Aligns image to the bottom
            backgroundSize: "cover", // Ensures image covers the entire area
          }}
        />
        {/* Mountain Layer 3 (furthest back, moves most) */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)", // Your mountain image
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y, // Apply vertical transform from Framer Motion
          }}
        />
        {/* Planets Layer (moves horizontally) */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)", // Your planets image
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX, // Apply horizontal transform from Framer Motion
          }}
        />
        {/* Mountain Layer 2 (middle layer, moves less than layer 3) */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)", // Your mountain image
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y, // Apply vertical transform from Framer Motion
          }}
        />
        {/* Mountain Layer 1 (closest, moves least or not at all) */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)", // Your mountain image
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y, // Apply vertical transform from Framer Motion
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
