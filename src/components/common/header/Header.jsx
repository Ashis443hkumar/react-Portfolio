import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [isMobile, setisMobile] = useState(false)
  return (
      <>
    <div className="header">
      <div className="logo">
          <img src="https://imroz.rainbowit.net/assets/images/logo/logo.png" alt="" />
      </div>
      <nav className={isMobile ? "nav-mobile-link" : "navbar-list "} onClick={() => setisMobile(false)}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="buynow">
            <NavLink to="/login">Login</NavLink>
        </div> 
      </nav>
      <div className="nav-links-icon" onClick={() => setisMobile(!isMobile)}>
        {
          isMobile ? (<i className="fas fa-times"></i>) :  (<i className="fas fa-bars"></i>)
        }
      </div>
    
    </div>
      </>
  );
}