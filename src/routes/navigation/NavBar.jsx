import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import "./navBar.scss";

export default function NavBar() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}
