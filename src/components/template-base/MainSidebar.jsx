import React from "react";
import PrivateComponent from "components/auth0/privateComponent";

const MainSidebar = () => {
  return (
    <div className="main-sidebar ">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="/" className="nav-link">
            Xelda
          </a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="/" className="nav-link">
            Xd
          </a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Inicio</li>
          <li className="active">
            <a href="/" className="nav-link">
              <i className="fas fa-fire" />
              Inicio
            </a>
          </li>
          <PrivateComponent rolesList={["Admin", "Vendedor"]}>
          <li className="menu-header">Módulos</li>
          <li className="nav-item dropdown">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="far fa-file-alt" /> <span>Ventas</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <a href="/sales">Listado de ventas</a>
              </li>
            </ul>
          </li>
          </PrivateComponent>
          <PrivateComponent rolesList={["Admin", "Vendedor"]}>
          <li className="nav-item dropdown">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="fas fa-briefcase"></i> <span>Productos</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <a href="/products">Listado de productos</a>
              </li>
            </ul>
          </li>
          </PrivateComponent>
          <PrivateComponent rolesList={["Admin"]}>
          <li className="nav-item dropdown">
            <a className="nav-link has-dropdown" data-toggle="dropdown">
              <i className="fas fa-users-cog" /> <span>Usuarios</span>
            </a>
            <ul className="dropdown-menu" style={{ display: "none" }}>
              <li>
                <a href="/users">Listado de Usuarios</a>
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
