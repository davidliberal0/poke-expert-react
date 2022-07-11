import React from "react";
import Navbar from "../navbar/Navbar";
import AboutHeading from "./AboutHeading";
import BuildInfo from "./BuildInfo";
import TeamSection from "./TeamSection";

const AboutPage = () => {
  return (
    <>
      <AboutHeading />
      <TeamSection />
      <BuildInfo />
    </>
  );
};

export default AboutPage;
