import React from "react";
import "./sidebar.css";
 import bg2 from "../assets/bg2.jpg"; // Adjust the path as necessary

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={bg2} alt="Background" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          molestias, perferendis nostrum recusandae aperiam doloribus sed
          aspernatur iste! Eveniet eligendi ipsam, nulla officia dignissimos
          distinctio saepe id alias unde soluta?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItems">Life</li>
          <li className="sidebarListItems">Music</li>
          <li className="sidebarListItems">Style</li>
          <li className="sidebarListItems">Sport</li>
          <li className="sidebarListItems">Tech</li>
          <li className="sidebarListItems">Cinema </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
     
        </div>



      </div>

    </div>
  );
}
