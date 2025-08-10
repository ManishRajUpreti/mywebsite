import { Html, useProgress } from "@react-three/drei"; // Html allows rendering React components in 3D space, useProgress tracks loading progress

const Loader = () => {
  // useProgress hook from @react-three/drei provides the loading progress percentage
  const { progress } = useProgress();

  return (
    // Html component renders standard HTML DOM elements inside a Three.js scene.
    // 'center' prop automatically centers the HTML content.
    <Html center className="text-xl font-normal text-center">
      {/* Display the loading progress as a percentage */}
      {progress.toFixed(0)}% Loaded
    </Html>
  );
};

export default Loader;
