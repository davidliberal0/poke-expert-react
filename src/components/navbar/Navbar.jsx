import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Nabar() {
  return (
    <nav className="long-nav bg-black fixed w-full">
      <div className="ml-4 mr-4">
        <div className="sm:flex justify-between">
          <Link to="/" className="p-3">
            <h1 className="text-3xl text-white font-bold">
              <span className="text-red-500">Poke</span>Expert.
            </h1>
          </Link>
          <ul className="text-white sm:self-center border-t sm:border-none nav-links text-sm">
            <li className="sm:inline-block" id="link-un">
              <a href="#" className="p-3">
                region
              </a>
            </li>
            <li className="sm:inline-block" id="link-un">
              <a href="#" className="p-3">
                tips
              </a>
            </li>
            <li className="sm:inline-block">
              <Link to="/database" className="p-3" id="link-selected">
                database
              </Link>
            </li>
            <li className="sm:inline-block" id="link-un">
              <a href="#" className="p-3">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nabar;
