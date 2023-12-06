import React, { useState } from "react";
import "./Navbar.css";

import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import LogoImage from "../../Assets/Logo.png";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(page);
  };
  const loginPage = "/login";
  const adminLogin = '/admin/login'
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <figure>
            <img className="logo-image" src={LogoImage} alt="LNMIIT Logo" />
          </figure>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
            <NavLink to ="/placements">Placements</NavLink>
            </li>
            <li>
            <div className="apply-button">
            <Button
              onClick={() => handleClick(loginPage)}
              variant="danger"
              size="lg"
            >
              Register Now!
            </Button>
          </div>
            </li>
            <li>
            <Button
            variant="danger"
            size="md">
              <Link to = {adminLogin} className="image-footer"> Admin Login</Link>
            </Button>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}

        <div>
        {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        </div>
      </nav>
      
      <Outlet />
    </>
  );
};

export default Navbar;
