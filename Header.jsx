import React from "react";
import Navbar from './Navbar';
import DropdownMenu from './DropdownMenu';
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="box1">
       <div className="rectangle" />
       <div className="title1">
       <div className="text-wrapper"><b>REFYN DATA</b></div>
      </div>
      <div className="title2">
       <div className="text-wrapper">WE REDEFINE YOUR WORLD</div>
      </div>
      </div>
      <Navbar />
      <DropdownMenu />
    </div>
  );
};

export default Header;