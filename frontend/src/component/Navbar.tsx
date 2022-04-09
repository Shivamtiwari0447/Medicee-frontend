import React, { useState } from "react";
import "./Assets/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <NavLink to="/">
Medicee

         </NavLink>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink  to="/home">
                Home
              </NavLink>
            </li>
           
            <li>
              <NavLink  to="/appointment"  >
              Appointment
              </NavLink>
            </li>
            <li>
              <NavLink  to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink  to="/aboutus">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink  to="/signin">
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
