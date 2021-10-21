import React from "react";
import { Link } from "react-router-dom";

const MainSidebar = () => {
  return (
    <div className="main-sidebar">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <Link to="/" className="nav-link">
            Xelda
          </Link>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <Link to="/" className="nav-link">
            Xd
          </Link>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Inicio</li>
          <li className="active">
            <Link to="/" className="nav-link">
              <i className="fas fa-fire" />
              Inicio
            </Link>
          </li>
          <li className="menu-header">Módulos</li>
          <li className="nav-item dropdown">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="far fa-file-alt" /> <span>Ventas</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <Link to="/sales">Listado de ventas</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="fas fa-briefcase"></i> <span>Productos</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <Link to="/products">Listado de productos</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="fas fa-users-cog" /> <span>Usuarios</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <Link to="/users">Listado de Usuarios</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="fas fa-sign-in-alt"></i> <span>Autenticación</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/auth-register">Registro</Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default MainSidebar;
