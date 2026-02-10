const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <div className="inline-block">
          <div className="relative w-12 h-12 mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-neutral-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
          </div>
        </div>
        <p className="text-neutral-400">{text}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
