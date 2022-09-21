import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="long-nav bg-black sticky top-0 w-full z-50  py-3 px-40">
            <div className="ml-4 mr-4">
                <div className="sm:flex justify-between">
                    <NavLink to="/" className="">
                        <h1 className="text-3xl text-white font-bold">
                            <span className="text-red-500">Poké</span>Expert.
                        </h1>
                    </NavLink>
                    <ul className="text-white sm:self-center border-t sm:border-none nav-links text-sm">
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
                        <li className="sm:inline-block">
                            <NavLink
                                to="/builder"
                                className="p-3"
                                id="link-selected"
                                style={({ isActive }) => {
                                    return {
                                        fontSize: isActive ? "23px" : "",
                                        color: isActive ? "#f15b5e" : "",
                                    };
                                }}
                            >
                                Builder
                            </NavLink>
                        </li>
                        <li className="sm:inline-block" id="link-un">
                            <a href="#" className="p-3">
                                tips
                            </a>
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
                    <div className="special-links flex items-center">
                        <a
                            href="https://github.com/davidliberal0/poke-expert-react"
                            class="pr-3"
                        >
                            <FaGithub className="text-white" size="2em" />
                        </a>{" "}
                        <a href="https://www.linkedin.com/in/david-liberal-2380b21b3/">
                            <FaLinkedin className="text-white" size="2em" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
