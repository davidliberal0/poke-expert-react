import React from "react";
import "../css/teamsection.css";
import ContributorImg from "./ContributorImg";
import david from "../imgs/david.jpg";
import jason from "../imgs/jason.png";

const TeamSection = () => {
  return (
    <div className="team-section bg-grey-800 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <ContributorImg
          teamMemb={"David Liberal"}
          imgSrc={david}
          teamTitle={"Front-End Engineer"}
        />
        <div className="h-0.5 w-96 bg-white mr-6 ml-6"></div>
        <ContributorImg
          teamMemb={"Jason Saini"}
          imgSrc={jason}
          teamTitle={"Back-End Engineer"}
        />
      </div>
    </div>
  );
};

export default TeamSection;
