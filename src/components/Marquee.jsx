import { twMerge } from "tailwind-merge"; // Utility to merge Tailwind CSS classes

export default function Marquee({
  className,
  reverse = false, // Controls the direction of the marquee (true for right-to-left/bottom-to-top)
  pauseOnHover = false, // If true, the marquee animation pauses when hovered
  children, // The content to be repeated and scrolled
  vertical = false, // If true, the marquee scrolls vertically; otherwise, horizontally
  repeat = 4, // How many times the children content should be repeated
  ...props // Any additional props passed to the main div
}) {
  return (
    <div
      {...props} // Spread any additional props to the container div
      className={twMerge(
        `group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
          // Dynamically set flex direction based on 'vertical' prop
          vertical ? "flex-col" : "flex-row"
        }`,
        className // Apply any custom classes passed to the component
      )}
    >
      {/*
        Create an array of 'repeat' length and map over it to duplicate the children content.
        This creates the illusion of an infinite scroll.
      */}
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i} // Using index as key is acceptable here since the items are static and not reordered
            className={twMerge(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              // Apply animation classes based on 'vertical' and 'reverse' props
              vertical
                ? "animate-marquee-vertical flex-col" // Vertical animation
                : "animate-marquee flex-row", // Horizontal animation
              // Pause animation on hover if 'pauseOnHover' is true
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              // Reverse animation direction if 'reverse' is true
              reverse && "[animation-direction:reverse]"
            )}
          >
            {children} {/* Render the duplicated content */}
          </div>
        ))}
    </div>
  );
}
