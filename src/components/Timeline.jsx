"use client"; // Mark this as a Client Component if you're using Next.js

import { useScroll, useTransform, motion } from "framer-motion"; // Corrected import for framer-motion
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  // ref for the main timeline content div, used to measure its height
  const ref = useRef(null);
  // containerRef for the scrollable area, used as the target for useScroll
  const containerRef = useRef(null);
  // State to store the height of the timeline content, used for scroll animation
  const [height, setHeight] = useState(0);

  // useEffect to measure the height of the timeline content after rendering
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height); // Set the height, which will be used for the animated line
    }
  }, [ref]); // Dependency on ref ensures this runs when the ref is assigned

  // useScroll hook tracks the scroll progress within the containerRef.
  // offset: Defines when the scroll tracking starts and ends relative to the target.
  // "start 10%": Starts tracking when the top of the target is 10% from the top of the viewport.
  // "end 50%": Ends tracking when the bottom of the target is 50% from the bottom of the viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // useTransform maps the scrollYProgress (0 to 1) to different output values.
  // heightTransform: Controls the height of the animated vertical line, from 0 to the full height of the timeline.
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  // opacityTransform: Controls the opacity of the animated vertical line, fading in over the first 10% of scroll.
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-20">
        {/* Map through the 'data' (experiences) to render each timeline item */}
        {data.map((item, index) => (
          <div
            key={index} // Using index as key is acceptable here as the list is static and not reordered
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Left side of the timeline: sticky date and title for desktop */}
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              {/* The small circle marker on the timeline line */}
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              {/* Desktop view of date, title, and job */}
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                <h3 className="text-3xl text-neutral-500">{item.job}</h3>
              </div>
            </div>

            {/* Right side of the timeline: job contents */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              {/* Mobile view of date and job (hidden on desktop) */}
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden ">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>
              {/* Map through the 'contents' for each experience item */}
              {item.contents.map((content, contentIndex) => (
                <p className="mb-3 font-normal text-neutral-400" key={contentIndex}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
        {/* The static background vertical line for the timeline */}
        <div
          style={{
            height: height + "px", // Set height dynamically based on content
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          {/* The animated foreground vertical line that fills up on scroll */}
          <motion.div
            style={{
              height: heightTransform, // Height animated by scroll progress
              opacity: opacityTransform, // Opacity animated by scroll progress
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
