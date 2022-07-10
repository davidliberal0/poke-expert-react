import React from "react";

const AboutHeading = () => {
  return (
    <div className="bg-black h-96 flex items-center justify-center text-4xl tracking-wider">
      <div className="text-white">
        The minds behind {}
        <span className="font-bold text-red-500 tracking-normal">
          Poke<span className="text-white">Expert.</span>
        </span>
      </div>
    </div>
  );
};

export default AboutHeading;
