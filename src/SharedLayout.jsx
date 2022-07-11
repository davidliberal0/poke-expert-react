import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
