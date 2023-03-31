import React, { useContext } from "react";
import logoStoica from "../../img/logo/logoStoica.png";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <Link to={"/ProyectoFinalReact"}>
            <img src={logoStoica} className="logo" alt="Logo Stoica" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={"/ProyectoFinalReact"}>Home</Link>
              </li>
              <li class="nav-item">
                <Link to={"/ProyectoFinalReact/category/men"}>Men</Link>
              </li>
              <li class="nav-item">
                <Link to={"/ProyectoFinalReact/category/women"}>Women</Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
