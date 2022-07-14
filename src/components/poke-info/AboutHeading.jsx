import React from "react";

const AboutHeading = () => {
  return (
    <div
      className="bg-black flex items-center justify-center text-4xl tracking-wider"
      style={{ height: "50vh" }}
    >
      <div className="text-white">
        The minds behind {}
        <span className="font-bold text-red-500 tracking-normal">
          Poké<span className="text-white">Expert.</span>
        </span>
      </div>
    </div>
  );
};

export default AboutHeading;
