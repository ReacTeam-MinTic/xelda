import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/styles.css";
import Footer from "components/template-base/Footer";
import PrivateComponent from "components/auth0/privateComponent";
import { useUser } from "context/userContext";
import { useEffect } from "react";

import { getUserLogin } from "utils/api";

const PublicPage = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, logout, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const { setUserData } = useUser();
  const [infoUser, setInfoUser] = useState({});

  const logoutCloseToken = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem("Token", null);
  };

  useEffect(() => {
    const fecthAuthoToken = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: `api-xelda-auth`,
      });
      localStorage.setItem("Token", accessToken);
      await getUserLogin(
        (response) => {
          setInfoUser(response["data"]);
          //console.log("aqui: ", infoUser)
          //console.log("Respuesta: ", response);
          setUserData(response.data);
        },
        (err) => {
          console.log("Error: ", err);
          logout({ returnTo: "https://secret-refuge-48972.herokuapp.com/" });
        }
      );
    };
    if (isAuthenticated) {
      fecthAuthoToken();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);

  return (
    <>
      <div className="main-wrapper container">
        <div className="navbar-bg" style={{ height: 75 }} />
        <nav
          className="navbar navbar-expand-lg main-navbar"
          style={{ left: "revert" }}
        >
          {/* <a href="index.html" className="navbar-brand sidebar-gone-hide">
            Xelda
          </a> */}
          <ul className="navbar-nav navbar-right">
            <li className="dropdown">
              <a
                data-toggle="dropdown"
                className="nav-link dropdown-toggle nav-link-lg nav-link-user"
              >
                <img
                  alt="image"
                  src={user ? user.picture : ""}
                  className="rounded-circle mr-1"
                />
                <div className="d-sm-none d-lg-inline-block">
                  Hola, {user ? user.name : "invitado"}
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-title">
                  {user ? infoUser.role : "SinRol"}
                </div>
                <div className="dropdown-divider"></div>
                <button
                  onClick={() => loginWithRedirect()}
                  className="dropdown-item has-icon text-danger"
                >
                  <i className="fas fa-sign-out-alt"></i> Iniciar sesi??n
                </button>
                <button
                  onClick={() => logoutCloseToken()}
                  className="dropdown-item has-icon text-danger"
                >
                  <i className="fas fa-sign-out-alt"></i> Salir
                </button>
              </div>
            </li>
          </ul>
        </nav>

        <div
          className="main-content"
          style={{ minHeight: 581, paddingLeft: 0, paddingTop: 120 }}
        >
          <section className="section">
            <div className="section-body">
              <div className="card">
                <div className="card-header">
                  <h4>M??dulo de ingreso</h4>
                </div>
                <div className="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="card card-statistic-1">
                        <a href="/dashboard">
                          <div class="card-icon bg-primary">
                            <i class="far fa-user"></i>
                          </div>
                        </a>
                        <div class="card-wrap">
                          <div class="card-header">
                            <a href="#">
                              <h4 style={{ marginTop: 15 }}>Perfil</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <PrivateComponent rolesList={["Admin"]}>
                      <div class="col-12">
                        <div class="card card-statistic-1">
                          <a href="/users">
                            <div class="card-icon bg-primary">
                              <i class="far fa-user"></i>
                            </div>
                          </a>
                          <div class="card-wrap">
                            <div class="card-header">
                              <a href="/users">
                                <h4 style={{ marginTop: 15 }}>Usuarios</h4>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PrivateComponent>
                    <PrivateComponent rolesList={["Admin", "Vendedor"]}>
                      <div class="col-12">
                        <div class="card card-statistic-1">
                          <a href="/products">
                            <div class="card-icon bg-danger">
                              <i class="far fa-newspaper"></i>
                            </div>
                          </a>
                          <div class="card-wrap">
                            <div class="card-header">
                              <a href="/products">
                                <h4 style={{ marginTop: 15 }}>Productos</h4>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PrivateComponent>
                    <PrivateComponent rolesList={["Admin", "Vendedor"]}>
                      <div class="col-12">
                        <div class="card card-statistic-1">
                          <a href="/sales">
                            <div class="card-icon bg-warning">
                              <i class="far fa-file"></i>
                            </div>
                          </a>
                          <div class="card-wrap">
                            <div class="card-header">
                              <a href="/sales">
                                <h4 style={{ marginTop: 15 }}>Ventas</h4>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PrivateComponent>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PublicPage;