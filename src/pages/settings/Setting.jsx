import React from 'react';
import "./setting.css";
import Sidebar from '../../sidebar/Sidebar';
import post2 from "../../assets/post2.jpg"; // Adjusted the path

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your Account</span>
          <span className="settingDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img className="settingImg" src={post2} alt="Background" />
            <label htmlFor="fileInput">
            <i class=" settingPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sadiii" />
          <label>Email</label>
          <input type="email" placeholder="sadiii@gmail.com " />
          <label>Password</label>
          <input type="password"  />
          <button className="settingSubmit"> Update </button>
        </form>
        

      </div>
      <Sidebar />
    </div>
  );
}
