import React from "react";
import "../css/teamsection.css";
import ContributorImg from "./ContributorImg";
import david from "../imgs/david.jpg";

const TeamSection = () => {
  return (
    <div className="team-section bg-grey-800 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <ContributorImg
          teamMemb={"David Liberal"}
          imgSrc={david}
          teamTitle={"Software Engineer"}
        />
      </div>
    </div>
  );
};

export default TeamSection;
