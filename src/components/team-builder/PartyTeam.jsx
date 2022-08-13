import React from "react";
import "../css/partyteam.css";

const PartyTeam = () => {
  return (
    <div className="bg-black side-bar ">
      <form>
        <div className="party-team flex flex-col">
          <div className="text-4xl">TEAM</div>
          <div className="party-items-container"></div>
          <div className="flex flex-col">
            <div className="mb-4">
              <button
                className="analyze-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Analyze
              </button>
            </div>
            <div>
              <button
                className="done-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
