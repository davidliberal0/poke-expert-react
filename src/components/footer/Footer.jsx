import React from "react";
import "../css/footer.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <div className="text-3xl text-white font-bold mb-3">
              <span className="text-red-500">Poke</span>Expert.&#8482;
            </div>
            <div className="text-white font-bold mb-2 text-2xl">PokeExpert</div>
            <div className="text-white mb-4">
              &copy; Copyright 2022 PokeExpert Technology Inc.
            </div>
            <div>
              <button type="button" className="btn-github mr-2">
                {" "}
                <a href="https://github.com/davidliberal0/poke-expert-react">
                  <FaGithub className="text-white" size="2em" />
                </a>
              </button>
              <button type="button" className="btn-github mr-2">
                {" "}
                <a href="https://www.instagram.com/nightly.dev/">
                  <FaInstagram className="text-white" size="2em" />
                </a>
              </button>
              <button type="button" className="btn-github">
                {" "}
                <a href="https://www.linkedin.com/in/david-liberal-2380b21b3/">
                  <FaLinkedin className="text-white" size="2em" />
                </a>
              </button>
            </div>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="/about">Team</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Developers</h4>
            <ul>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Repository</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Org</h4>
            <ul>
              <li>
                <a href="#">License</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
