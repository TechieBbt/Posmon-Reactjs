import React, { useState } from "react";
import classes from "./navbar.module.css";
import Logo from "../../Assets/Pavilion.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="/" />
        </Link>
      </div>
      <ul className={classes.navMenu}>
        <li>
          <Link to="/" className={classes.navlink}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Sidebar" className={classes.navlink}>
            Sidebar
          </Link>
        </li>
        <li>
          <Link to="/Cards" className={classes.navlink}>
            Cards
          </Link>
        </li>
        </ul>
      <div className={classes.navIcons}>
        <FaFacebook className={classes.icon} />
        <FaInstagram className={classes.icon} />
        <FaTwitter className={classes.icon} />
      </div>
      <div className={classes.hamburger} onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className={classes.Icons} />
        ) : (
          <AiOutlineClose className={classes.Icons} />
        )}
       
      </div>
      <div className={nav ? classes.active : classes.mobileMenu}>
        <ul className={classes.mobileNav}>
          <li>
            <Link to="/" className={classes.navlink}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Sidebar" className={classes.navlink}>
              Sidebar
            </Link>
          </li>
          <li>
            <Link to="/Cards" className={classes.navlink}>
              Cards
            </Link>
          </li>
        </ul>
        <div className={classes.mobileMenuBottom}>
          <div className={classes.menuIcons}>
            <a href="https://wa.link/iy94j6">
            <button>Click to chat on whatsapp</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;