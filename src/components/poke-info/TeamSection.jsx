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
      </div>
    </div>
  );
};

export default TeamSection;
