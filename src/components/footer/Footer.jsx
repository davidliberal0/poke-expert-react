import React from "react";
import "../css/footer.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section flex items-center justify-center">
      <div className="flex justify-center ez-div">
        <div className="ft-oneCol" style={{ marginRight: "15rem" }}>
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
        <div className="" style={{ marginRight: "15rem" }}>
          <div className="text-white font-bold text-xl">About</div>
        </div>
        <div className="text-white" style={{ marginRight: "15rem" }}>
          <div className="text-xl font-bold mb-2">Developers</div>
          <div className="font-extralight">Documentation</div>
        </div>
        <div className="text-white">
          <div className="text-xl font-bold mb-2">ORG</div>
          <div className="mb-1">Privacy</div>
          <div>Terms</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
