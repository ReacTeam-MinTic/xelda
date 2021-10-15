import React from "react";
import Login from "layouts/login";
import { Link } from "react-router-dom";

function LoginUser() {
  return (
    <>
      <Login>
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div className="login-brand">
                  <a  href="/">
                  <img
                    src="../assets/img/logo.svg"
                    alt="logo"
                    width={100}
                    className="shadow-light rounded-circle"
                  />
                  </a>
                </div>
                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Ingreso</h4>
                  </div>
                  <div className="card-body">
                    <form
                      method="POST"
                      action="#"
                      className="needs-validation"
                      noValidate
                    >
                      <div className="form-group">
                        <label htmlFor="email">Correo electronico</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          tabIndex={1}
                          required
                          autofocus
                        />
                        <div className="invalid-feedback">
                          Porfavor digite su correo electronico
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">
                            Contraseña
                          </label>
                          <div className="float-right">
                            <a
                              href="auth-forgot-password.html"
                              className="text-small"
                            >
                              Olvido su contraseña?
                            </a>
                          </div>
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          tabIndex={2}
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor digite su contraseña
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="remember"
                            className="custom-control-input"
                            tabIndex={3}
                            id="remember-me"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="remember-me"
                          >
                            Recordarme
                          </label>
                        </div>
                      </div>
                      <div class="container">
                      <div class="row">
                        
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                          >
                            Iniciar sesión
                          </button>
                      
                      </div>
                      <br></br>
                      
                      <div class="row">
                        
                          <button
                            type="submit"
                            className="btn btn-dark2 btn-lg btn-block"
                          > <img src="../assets/img/logo-google.svg"
                          alt="logo"
                          width={17}/> <br />
                             Incia sesión conGoogle
                          </button>
                        
                      </div>
                    </div>






                    </form>
                    <div className="row sm-gutters">
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-muted text-center">
                  No tiene una cuenta?{" "}
                  <a href="auth-register.html">Crear una</a>
                </div>
                <div className="simple-footer">Copyright © Xelda 2021</div>
              </div>
            </div>
          </div>
        </section>
      </Login>
    </>
  );
}

export default LoginUser;