import React from "react";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../styledcomponents.js";

const links = ["Product" , "Company" , "Connect"];
const additionalLinks = ["Contact","Newsletter","LinkedIn"];

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
                  { additionalLinks.map((item) => (
                    <div key={item}>
                      <a>{item}</a>
                    </div>
                  ))}
                </div>
              }
            </div>
          ))}
        </div>
      </div>
      <div className="navbar-right">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar ;