import React from "react";
import PrivateComponent from "components/auth0/privateComponent";
import { Link } from "react-router-dom";

const MainSidebar = () => {
  return (
    <div className="main-sidebar" id="navbarToggleExternalContent">
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
            <Link to='/dashboard' className="nav-link">
              <i className="fas fa-fire" />
              Inicio
            </Link>
          </li>
          <PrivateComponent rolesList={["Admin", "Vendedor"]}>
          <li className="menu-header">Módulos</li>
          <li className="nav-item dropdown mb-4">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="far fa-file-alt" /> <span>Ventas</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <Link to="/sales">Listado de ventas</Link>
              </li>
            </ul>
          </li>
          </PrivateComponent>
          <PrivateComponent rolesList={["Admin", "Vendedor"]}>
          <li className="nav-item dropdown mb-4">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="fas fa-briefcase"></i> <span>Productos</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <Link to="/products">Listado de productos</Link>
              </li>
            </ul>
          </li>
          </PrivateComponent>
          <PrivateComponent rolesList={["Admin"]}>
          <li className="nav-item dropdown mb-4">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="fas fa-users-cog" /> <span>Usuarios</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <Link to="/users">Listado de Usuarios</Link>
              </li>
            </ul>
          </li>
          </PrivateComponent>
        </ul>
      </aside>
    </div>
  );
};

export default MainSidebar;
