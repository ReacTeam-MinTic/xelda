import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { logout } = useAuth0();
    return (
      <>
      <div className="navbar-bg"></div>
      <nav className="navbar navbar-expand-lg main-navbar">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li>
              <a href="#" data-toggle="sidebar" className="nav-link nav-link-lg">
                <i className="fas fa-bars"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="search"
                className="nav-link nav-link-lg d-sm-none"
              >
                <i className="fas fa-search"></i>
              </a>
            </li>
          </ul>
        </form>
        
        <ul className="navbar-nav navbar-right">
          <li className="dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle nav-link-lg nav-link-user"
            >
              <img
                alt="image"
                src="../assets/img/avatar/avatar-1.png"
                className="rounded-circle mr-1"
              />
              <div className="d-sm-none d-lg-inline-block">Hi, User</div>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-title">Logged in 5 min ago</div>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item has-icon text-danger">
                <i onClick={() => logout({ returnTo: window.location.origin })} className="fas fa-sign-out-alt"></i> Cerrar Sesión
              </a>
            </div>
          </li>
        </ul>
      </nav>
      </>

    )
}

export default NavBar;
