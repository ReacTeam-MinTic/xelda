import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="app">
        <div className="main-wrapper">
          <div className="navbar-bg"></div>
          <nav className="navbar navbar-expand-lg main-navbar">
            <form className="form-inline mr-auto">
              <ul className="navbar-nav mr-3">
                <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
                <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
              </ul>

              <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
                <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                <div className="search-backdrop"></div>
                <div className="search-result">
                  <div className="search-header">
                    Histories
                  </div>
                  <div className="search-item">
                    <a href="#">How to hack NASA using CSS</a>
                    <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                  </div>
                  <div className="search-item">
                    <a href="#">Kodinger.com</a>
                    <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                  </div>
                  <div className="search-item">
                    <a href="#">#Stisla</a>
                    <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                  </div>
                  <div className="search-header">
                    Result
                  </div>
                  <div className="search-item">
                    <a href="#">

                      oPhone S9 Limited Edition
                    </a>
                  </div>
                  <div className="search-item">
                    <a href="#">
                      Drone X2 New Gen-7
                    </a>
                  </div>
                  <div className="search-item">
                    <a href="#">
                      Headphone Blitz
                    </a>
                  </div>
                  <div className="search-header">
                    Projects
                  </div>
                  <div className="search-item">
                    <a href="#">
                      <div className="search-icon bg-danger text-white mr-3">
                        <i className="fas fa-code"></i>
                      </div>
                      Stisla Admin Template
                    </a>
                  </div>
                  <div className="search-item">
                    <a href="#">
                      <div className="search-icon bg-primary text-white mr-3">
                        <i className="fas fa-laptop"></i>
                      </div>
                      Create a new Homepage Design
                    </a>
                  </div>
                </div>
          
            </form>
            <ul className="navbar-nav navbar-right">
              <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope"></i></a>
                <div className="dropdown-menu dropdown-list dropdown-menu-right">
                  <div className="dropdown-header">Messages
                    <div className="float-right">
                      <a href="#">Mark All As Read</a>
                    </div>
                  </div>
                  <div className="dropdown-list-content dropdown-list-message">
                    <a href="#" className="dropdown-item dropdown-item-unread">
                      <div className="dropdown-item-avatar">

                        <div className="is-online"></div>
                      </div>
                      <div className="dropdown-item-desc">
                        <b>Kusnaedi</b>
                        <p>Hello, Bro!</p>
                        <div className="time">10 Hours Ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item dropdown-item-unread">
                      <div className="dropdown-item-avatar">

                      </div>
                      <div className="dropdown-item-desc">
                        <b>Dedik Sugiharto</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        <div className="time">12 Hours Ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item dropdown-item-unread">
                      <div className="dropdown-item-avatar">
                        <div className="is-online"></div>
                      </div>
                      <div className="dropdown-item-desc">
                        <b>Agung Ardiansyah</b>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="time">12 Hours Ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="dropdown-item-avatar">
                      </div>
                      <div className="dropdown-item-desc">
                        <b>Ardian Rahardiansyah</b>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                        <div className="time">16 Hours Ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="dropdown-item-avatar">
                      </div>
                      <div className="dropdown-item-desc">
                        <b>Alfa Zulkarnain</b>
                        <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        <div className="time">Yesterday</div>
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-footer text-center">
                    <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </li>
              <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell"></i></a>
                <div className="dropdown-menu dropdown-list dropdown-menu-right">
                  <div className="dropdown-header">Notifications
                    <div className="float-right">
                      <a href="#">Mark All As Read</a>
                    </div>
                  </div>
                  <div className="dropdown-list-content dropdown-list-icons">
                    <a href="#" className="dropdown-item dropdown-item-unread">
                      <div className="dropdown-item-icon bg-primary text-white">
                        <i className="fas fa-code"></i>
                      </div>
                      <div className="dropdown-item-desc">
                        Template update is available now!
                        <div className="time text-primary">2 Min Ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="dropdown-item-icon bg-info text-white">
                        <i className="far fa-user"></i>
                      </div>
                      <div className="dropdown-item-desc">
                        <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                        <div className="time">10 Hours Ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="dropdown-item-icon bg-success text-white">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="dropdown-item-desc">
                        <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                        <div className="time">12 Hours Ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="dropdown-item-icon bg-danger text-white">
                        <i className="fas fa-exclamation-triangle"></i>
                      </div>
                      <div className="dropdown-item-desc">
                        Low disk space. Let's clean it!
                        <div className="time">17 Hours Ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="dropdown-item-icon bg-info text-white">
                        <i className="fas fa-bell"></i>
                      </div>
                      <div className="dropdown-item-desc">
                        Welcome to Stisla template!
                        <div className="time">Yesterday</div>
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-footer text-center">
                    <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </li>
              <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">

                <div className="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-title">Logged in 5 min ago</div>
                  <a href="features-profile.html" className="dropdown-item has-icon">
                    <i className="far fa-user"></i> Profile
                  </a>
                  <a href="features-activities.html" className="dropdown-item has-icon">
                    <i className="fas fa-bolt"></i> Activities
                  </a>
                  <a href="features-settings.html" className="dropdown-item has-icon">
                    <i className="fas fa-cog"></i> Settings
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item has-icon text-danger">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="main-sidebar">
            <aside id="sidebar-wrapper">
              <div className="sidebar-brand">
                <a href="index.html">Xelda</a>
              </div>
              <div className="sidebar-brand sidebar-brand-sm">
                <a href="index.html">St</a>
              </div>
              <ul className="sidebar-menu">
                <li className="menu-header">Dashboard</li>
                <li className="nav-item dropdown active">
                  <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Inicio</span></a>

                </li>
                <li className="menu-header">Modulos</li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns"></i> <span>Ventas</span></a>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns"></i> <span>Vendedores</span></a>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns"></i> <span>Usuarios</span></a>
                </li>


              </ul>


            </aside>
          </div>
          <div className="main-content">
            <section className="section">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card card-statistic-2">
                    <div className="card-stats">
                      <div className="card-stats-title">Modulo de Ventas
                      </div>
                      <div className="card-stats-items">
                        <div className="card-stats-item">
                          <div className="card-stats-item-count">24</div>
                          <div className="card-stats-item-label">Completadas</div>
                        </div>
                        <div className="card-stats-item">
                          <div className="card-stats-item-count">12</div>
                          <div className="card-stats-item-label">Pendientes</div>
                        </div>
                        <div className="card-stats-item">
                          <div className="card-stats-item-count">23</div>
                          <div className="card-stats-item-label">Rechazadas</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-icon shadow-primary bg-primary">
                      <i className="fas fa-archive"></i>
                    </div>
                    <div className="card-wrap">
                      <div className="card-header">
                        <h4>Total de Ventas</h4>
                      </div>
                      <div className="card-body">
                        59
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card card-statistic-2">
                    <div className="card-stats">
                      <div className="card-stats-title">Modulo de Vendedores
                      </div>
                      <div className="card-stats-items">
                        <div className="card-stats-item">
                          <div className="card-stats-item-count">24</div>
                          <div className="card-stats-item-label">Activos</div>
                        </div>
                        <div className="card-stats-item">
                          <div className="card-stats-item-count">12</div>
                          <div className="card-stats-item-label">Inactivos</div>
                        </div>
                        <div className="card-stats-item">
                          <div className="card-stats-item-count">23</div>
                          <div className="card-stats-item-label">Eliminados</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-icon shadow-primary bg-primary">
                      <i className="fas fa-archive"></i>
                    </div>
                    <div className="card-wrap">
                      <div className="card-header">
                        <h4>Total de Vendedores</h4>
                      </div>
                      <div className="card-body">
                        59
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card card-statistic-2">
                    <div className="card-stats">
                      <div className="card-stats-title">Modulo de Usuarios
                      </div>
                      <div className="card-stats-items">
                        <div className="card-stats-item">
                          <div className="card-stats-item-count">24</div>
                          <div className="card-stats-item-label">Activos</div>
                        </div>
                        <div className="card-stats-item">
                          <div className="card-stats-item-count">12</div>
                          <div className="card-stats-item-label">Inactivos</div>
                        </div>

                      </div>
                    </div>
                    <div className="card-icon shadow-primary bg-primary">
                      <i className="fas fa-archive"></i>
                    </div>
                    <div className="card-wrap">
                      <div className="card-header">
                        <h4>Total de Usuarios</h4>
                      </div>
                      <div className="card-body">
                        59
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </section>
          </div>
          <footer className="main-footer">
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
