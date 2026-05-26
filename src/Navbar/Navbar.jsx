import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import logo2 from "../logo2.jpeg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const closeMenuOnMobile = () => setShowMenu(false);

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCart();

    window.addEventListener("storage", updateCart);

    return () => window.removeEventListener("storage", updateCart);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">

        {/* LOGO */}
        {/* <NavLink
          to="/"
          className="nav__logo"
          onClick={closeMenuOnMobile}
        >
          <img src={logo2} alt="logo" className="nav__logo-img" />
        Klik Digi Setu
        </NavLink> */}

        <NavLink
  to="/"
  className="kds_brand_logo_wrapper"
  onClick={closeMenuOnMobile}
>
  <img
    src={logo2}
    alt="Klik Digi Setu"
    className="kds_brand_main_logo"
  />
</NavLink>

        {/* MENU */}
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>

          {/* CLOSE BUTTON */}
          <div className="nav__close" onClick={toggleMenu}>
            <IoClose />
          </div>

          <ul className="nav__list">

            <li>
              <NavLink
                to="/"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/overview"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Overview
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/packages"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contact
              </NavLink>
            </li>

            {/* DROPDOWN */}
            <li className="dropdown">

              <span className="nav__link">More</span>

              <ul className="dropdown-menu">

                <li className="dropdown-item">
                  <NavLink
                    to="/data-entry"
                    onClick={closeMenuOnMobile}
                  >
                    Data Entry
                  </NavLink>
                </li>

                <li className="dropdown-item">
                  <NavLink
                    to="/login"
                    onClick={closeMenuOnMobile}
                  >
                    Dashboard
                  </NavLink>
                </li>

              </ul>
            </li>

          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav__right">

          {/* CART */}
          <NavLink
            to="/cart"
            className="cart-icon"
            onClick={closeMenuOnMobile}
          >
            <FaShoppingCart />

            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* MOBILE MENU BUTTON */}
          <div className="nav__toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;