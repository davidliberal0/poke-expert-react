import React from "react";
import FeaturesSection from "./FeaturesSection";
import LandingSection from "./LandingSection";
import ProductSection from "./ProductSection";

const HomePage = () => {
  return (
    <div className="bg-black">
      <LandingSection />
      <ProductSection />
      <FeaturesSection />
    </div>
  );
};

export default HomePage;
