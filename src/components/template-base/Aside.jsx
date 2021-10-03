import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="/" className="nav-link">Xelda</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="/" className="nav-link">Xd</a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Inicio</li>
            <li className="active">
              <a href="/" className="nav-link">
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
                  <a href="/listventas">Listado de ventas</a>
                </li>
                <li>
                  <a href="/ventas">Registrar ventas</a>
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
                  <a href="/listproducts">Listado de productos</a>
                </li>
                <li>
                  <a href="/formproducts">Agregar productos</a>
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
                  <a href="/listusers">Listado de usuarios</a>
                </li>
                <li>
                  <a href="/formusers">Agregar usuarios</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link has-dropdown"
                data-toggle="dropdown"
              >
                <i className="fas fa-sign-in-alt"></i> <span>Autenticación</span>
              </a>
              <ul className="dropdown-menu" style={{ display: "none" }}>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/auth-register">Registro</a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
  );
}

export default Aside;
