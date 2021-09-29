import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html">Xelda</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="index.html">Xd</a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Inicio</li>
            <li className="nav-item dropdown active">
              <a href="#" className="nav-link has-dropdown">
                <i className="fas fa-fire" />
                <span>Inicio</span>
              </a>
            </li>
            <li className="menu-header">Módulos</li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link has-dropdown"
                data-toggle="dropdown"
              >
                <i className="far fa-file-alt" /> <span>Ventas</span>
              </a>
              <ul className="dropdown-menu" style={{ display: "none" }}>
                <li>
                  <Link to="#">Listado de ventas</Link>
                </li>
                <li>
                  <Link to="#">Registar ventas</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link has-dropdown"
                data-toggle="dropdown"
              >
                <i className="fas fa-briefcase"></i> <span>Productos</span>
              </a>
              <ul className="dropdown-menu" style={{ display: "none" }}>
                <li>
                  <Link to="/listproducts">Listado de productos</Link>
                </li>
                <li>
                  <Link to="#">Agregar productos</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link has-dropdown"
                data-toggle="dropdown"
              >
                <i className="fas fa-users-cog" /> <span>Usuarios</span>
              </a>
              <ul className="dropdown-menu" style={{ display: "none" }}>
                <li>
                  <Link to="/listusers">Listado de usuarios</Link>
                </li>
                <li>
                  <Link to="/formusers">Agregar usuarios</Link>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
  );
}

export default Aside;
