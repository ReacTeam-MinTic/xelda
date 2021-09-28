import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div>
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html">Xelda</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="index.html">Xd</a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
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
                  <Link to="#">Listado</Link>
                </li>
                <li>
                  <Link to="#">Crud</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link has-dropdown"
                data-toggle="dropdown"
              >
                <i className="fas fa-users-cog" /> <span>Vendedores</span>
              </a>
              <ul className="dropdown-menu" style={{ display: "none" }}>
                <li>
                  <Link to="#">Listado</Link>
                </li>
                <li>
                  <Link to="#">Crud</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link has-dropdown"
                data-toggle="dropdown"
              >
                <i className="fas fa-users" /> <span>Usuarios</span>
              </a>
              <ul className="dropdown-menu" style={{ display: "none" }}>
                <li>
                  <Link to="/users">Listado</Link>
                </li>
                <li>
                  <Link to="#">Crud</Link>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Aside;
