import React from 'react';
import "./header.css";
import bg1 from '../assets/bg1.jpg'; // Adjust the path as necessary

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg"><i>Blog</i></span>
      </div>
      <img className="headerImg" src={bg1} alt="Background" />
    </div>
  );
}
