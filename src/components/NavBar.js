import React from "react";
import { FaFlask } from "react-icons/fa";
import {TbGridDots} from "react-icons/tb"

export default function NavBar() {
  return (
    <div className="Navbar">
      <div className="Container">
        <a href="https://mail.google.com" className="text">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl" className="text">Images</a>
        <FaFlask size={20}   className="icon" color="white"/>
        <TbGridDots size={20} className="icon" color="white" />

      </div>
    </div>
  );
}
