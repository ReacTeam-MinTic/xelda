import React from 'react'

const MainSidebar = () => {
    return (
      <div className="main-sidebar">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="/index" className="nav-link">Xelda</a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="/index" className="nav-link">Xd</a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Inicio</li>
          <li className="active">
            <a href="/index" className="nav-link">
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
                <a href="/sales">Listado de ventas</a>
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
                <a href="/products">Listado de productos</a>
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
                <a href="/users">Listado de Usuarios</a>
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

export default MainSidebar
