import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCog,
  FaHeadset,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import React from "react";
//import "./Assets/sidebar.scss";

interface Props {
  ontoggle: (flag: boolean) => void;
}

export function SideBar(props: Props) {
  const [toggled, settoggled] = useState(false);


  const toggleSideBar = () => {
    settoggled((toggled) => !toggled);
    props.ontoggle(!toggled);
  };
  return (
    <ul
      className={
        "navbar-nav bg-primary sidebar sidebar-dark accordion  " + 
        (toggled ? "toggled" : "")
      }
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i> <FaTachometerAlt /> </i>
          <span className="success"><h2>Dashboard</h2></span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">UserName</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <div
          className="nav-link collapsed pointer"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-book"></i>
          <span>Book Appointment</span>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">
              Buttons
            </a>
            <a className="collapse-item" href="cards.html">
              Cards
            </a>
          </div>
        </div>
      </li>
      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">More</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      {/* <li className="nav-item">
        <div
          className="nav-link collapsed pointer"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i>
            <FaCog />
          </i>
          <span>Settings</span>
        </div>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">
              Login
            </a>
            <a className="collapse-item" href="register.html">
              Register
            </a>
            <a className="collapse-item" href="forgot-password.html">
              Forgot Password
            </a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">
              Settings
            </a>
            <a className="collapse-item" href="blank.html">
              Support
            </a>
          </div>
        </div>
      </li> */}

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <div className="nav-link pointer">
          <FaSignOutAlt />
          <span> Logout</span>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-link pointer">
          <FaSignOutAlt />
          <span> Logout</span>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-link pointer">
          <FaSignOutAlt />
          <span> Logout</span>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-link pointer">
          <FaSignOutAlt />
          <span> Logout</span>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-link pointer">
          <FaSignOutAlt />
          <span> Logout</span>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button
          onClick={toggleSideBar}
          className="rounded-circle border-0"
          id="sidebarToggle"
        >
          {toggled ? (
            <FaChevronRight className="text-white " />
          ) : (
            <FaChevronLeft className="text-white m-auto" />
          )}
        </button>
      </div>
    </ul>
  );
}