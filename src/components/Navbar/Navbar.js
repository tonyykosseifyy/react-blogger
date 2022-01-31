import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={require("../../assets/logo.svg")} alt="Blogr Logo" />
    </nav>
  );
};

export default Navbar ;