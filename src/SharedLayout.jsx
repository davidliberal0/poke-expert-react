import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default SharedLayout;
