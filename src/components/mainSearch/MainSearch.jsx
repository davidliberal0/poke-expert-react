import React from "react";
import SearchbarTT from "./SearchbarTT";

function MainSearch() {
  return (
    <div className="db-section" style={{}}>
      <section className="main-content">
        <div className="container-one flex justify-center items-center flex-col">
          <section className="heading mt-6 mb-6">
            <div className='text-white font-bold text-6xl text-center w-auto"'>
              <span className="text-red-500">Poké</span>Expert.
            </div>
            <div className="text-white text-6xl font-bold text-center w-auto uppercase tracking-widest mt-3">
              PokeDex Database
            </div>
          </section>
        </div>
      </section>
      <SearchbarTT />
    </div>
  );
}

export default MainSearch;
