import React from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';
//import profileImage from '../assets/Profile.jpg'; // Adjust the path as necessary

export default function TopNav() {

  const user = true;
  //const user = false;

  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList"  >
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem"> 
            <Link className="link" to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
            {/* <Link className="link" to="/login">LOGOUT</Link> */}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {
          user? (
<img className="topImage" src="" alt="Profile" />
          ):(
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/login">Login</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/register">Register</Link>
              </li>
            
            </ul>
            
          )
        }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
