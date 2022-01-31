import React from "react";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";


const links = ["Product" , "Company" , "Connect"];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={require("../../assets/logo.svg")} alt="Blogr Logo" />
        <div className="navbar-desktop-links">
          { links.map(( link , index ) => (
            <div key={link} className={`desktop-link ${link === "Connect" && "connect"}`} >
              <a>{link}</a>
              <IoIosArrowDown />
              { link === "Connect" && 
                <div className="additional-links">
                  
                </div>
              }
            </div>
          ))}
        </div>
      </div>

    </nav>
  );
};

export default Navbar ;