import React from "react";

const AuthRegister = () => {
  return (
    <div>
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              <div className="login-brand">
                <a href="/">
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
                  <h4>Formulario de Registro</h4>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="first_name">Nombres</label>
                        <input
                          id="first_name"
                          type="text"
                          className="form-control"
                          name="first_name"
                          autofocus
                        />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="last_name">Apellidos</label>
                        <input
                          id="last_name"
                          type="text"
                          className="form-control"
                          name="last_name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                      />
                      <div className="invalid-feedback"></div>
                    </div>
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="password" className="d-block">
                          Contraseña
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control pwstrength"
                          data-indicator="pwindicator"
                          name="password"
                        />
                        <div id="pwindicator" className="pwindicator">
                          <div className="bar" />
                          <div className="label" />
                        </div>
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="password2" className="d-block">
                          Repite tu Contraseña
                        </label>
                        <input
                          id="password2"
                          type="password"
                          className="form-control"
                          name="password-confirm"
                        />
                      </div>
                    </div>
                    <div class="container">
                      <div class="row">
                        
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                          >
                            Registrar
                          </button>
                      
                      </div>
                      
                      
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthRegister;
