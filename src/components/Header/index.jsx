import React from "react";
import Navbar from "../Navbar";
import HeadBody from "../HeaderBody";
import './header.css'
const Header = () => {
  return (
    <div className="header">
        <Navbar />
        <HeadBody />
    </div>
  );
};

export default Header;
