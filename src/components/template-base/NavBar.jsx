import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const NavBar = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, logout } = useAuth0();

  const logoutCloseToken = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem("Token", null);
  }
    return (
      <>
      <div className="navbar-bg"></div>
      <nav className="navbar navbar-expand-lg main-navbar">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li>
              <Link   data-toggle="sidebar" className="nav-link nav-link-lg">
                <i className="fas fa-bars"></i>
              </Link>
            </li>
            <li>
              <Link
                 
                data-toggle="search"
                className="nav-link nav-link-lg d-sm-none"
              >
                <i className="fas fa-search"></i>
              </Link>
            </li>
          </ul>
        </form>
        
        <ul className="navbar-nav navbar-right">
          <li className="dropdown">
            <a
               
              data-toggle="dropdown"
              className="nav-link dropdown-toggle nav-link-lg nav-link-user"
            >
              <img
                alt="image"
                src={user.picture}
                className="rounded-circle mr-1"
              />
              <div className="d-sm-none d-lg-inline-block">Hola, {user ? user.name : "invitado"}</div>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-title">Logged in 5 min ago</div>
              <div className="dropdown-divider"></div>
              <button  onClick={() => loginWithRedirect()} className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Iniciar sesión
              </button>
              <button onClick={() => logoutCloseToken()} className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Salir
              </button>
            </div>
          </li>
        </ul>
      </nav>
      </>

    )
}

export default NavBar;
