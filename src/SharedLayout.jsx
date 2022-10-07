import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FooterTwo from "./components/footer/FooterTwo";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Outlet />
      </div>
      <FooterTwo />
    </>
  );
};

export default SharedLayout;
