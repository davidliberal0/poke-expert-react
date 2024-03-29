import React from "react";
import "../css/partyteam.css";
import Team from "./Team.jsx";

const PartyTeam = (props) => {
  return (
    <div className="side-bar rounded-2xl ">
      <form className="flex justify-center">
        <div className="party-team flex flex-col">
          <div className="text-4xl text-center mb-3 mt-3">Party</div>
          <div className="party-items-container flex flex-cols items-center">
            {/* This is where the party/team component will be injected */}
            <Team members={props.members} onDelete={props.onDelete} />
          </div>
          <div className="flex flex-col">
            <div className="mb-4 ml-3 mr-3">
              <button
                className="done-button bg-red-700 rounded-md text-white hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold px-4 py-2 text-center mr-2 mb-2"
                type="submit"
              >
                Analyze
              </button>
            </div>
            <div className="ml-3 mr-3">
              <button
                className="done-button bg-red-700 rounded-md text-white hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold px-4 py-2 text-center mr-2 mb-2"
                type="submit"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PartyTeam;
