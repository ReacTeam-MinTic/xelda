import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD

const NavBar = () => {
  console.log("informacion usuario", typeof(useAuth0))
  const { logout, user } = useAuth0();

  const cerrarSesion = ()=>{
    logout({ returnTo: window.location.origin})
    localStorage.setItem('token', null)
  }
  return (
    <>
=======
import { Link } from 'react-router-dom';
>>>>>>> 55e9269a5a2b3e170ad2bba540567ec569bc125b


const NavBar = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, logout } = useAuth0();

  const logoutCloseToken = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem("Token", null);
  }
    return (
      <>
>>>>>>> user_backend_ok
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
               
              data-toggle="dropdown"
              className="nav-link dropdown-toggle nav-link-lg nav-link-user"
            >
              <img
                alt="image"
<<<<<<< HEAD
                src={user ? user.picture : "" }
=======
                src={user.picture}
<<<<<<< HEAD
                className="rounded-circle mr-2"
              />
              <div className="d-sm-none d-lg-inline-block">{`Hola, ${user.name}`}</div>
=======
>>>>>>> 55e9269a5a2b3e170ad2bba540567ec569bc125b
                className="rounded-circle mr-1"
              />
              <div className="d-sm-none d-lg-inline-block">Hola, {user ? user.name : "invitado"}</div>
>>>>>>> user_backend_ok
            </a>
            <div className="dropdown-menu dropdown-menu-right">
            {/*<div className="dropdown-title">Logged in 5 min ago</div> */}
              <div className="dropdown-divider"></div>
<<<<<<< HEAD

              <button onClick={() => cerrarSesion() } className="d-flex align-items-center dropdown-item has-icon pe-auto text-danger">
                <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
=======
              <button  onClick={() => loginWithRedirect()} className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Iniciar sesión
              </button>
              <button onClick={() => logoutCloseToken()} className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Salir
>>>>>>> user_backend_ok
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>

  )
}

export default NavBar;
