import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="long-nav bg-black fixed w-full">
      <div className="ml-4 mr-4">
        <div className="sm:flex justify-between">
          <NavLink to="/" className="p-3">
            <h1 className="text-3xl text-white font-bold">
              <span className="text-red-500">Poke</span>Expert.
            </h1>
          </NavLink>
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
              <NavLink
                to="/database"
                className="p-3"
                id="link-selected"
                style={({ isActive }) => {
                  return {
                    fontSize: isActive ? "23px" : "",
                    color: isActive ? "#f15b5e" : "",
                  };
                }}
              >
                database
              </NavLink>
            </li>
            <li className="sm:inline-block" id="link-un">
              <NavLink
                to="/about"
                className="p-3"
                style={({ isActive }) => {
                  return {
                    fontSize: isActive ? "23px" : "",
                    color: isActive ? "#f15b5e" : "",
                  };
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
