import Login from 'layouts/login'
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const LoginUsers = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Login>
        <section className="section">
          <div className="d-flex flex-wrap align-items-stretch">
            <div className="d-flex flex-column col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white justify-content-center">
              <div className="p-4 m-3">
                <div className="d-flex justify-content-center flex-column m-md-5 h-50">
                  <div className="d-flex justify-content-center">
                    <img src="../assets/img/logo.svg" alt="logo" width="80" className="shadow-light rounded-circle mb-5 mt-2"/>
                  </div>
                  <div className="mt-4 mb-5">
                    <h4 className ="text-dark text-center font-weight-normal">Bienvenido a <span className ="font-weight-bold">Xelda</span></h4>
                    <p className ="text-muted text-center">Antes de empezar debes iniciar sesión con nosotros, que lo disfrutes.</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button onClick={() => loginWithRedirect('/index')} type ="submit" className ="btn btn-primary btn-lg btn-icon icon-right mt-5 px-5 fw-bolder" tabIndex="1">
                    Ingresar
                  </button>
                </div>
                <div className ="text-center mt-5 pt-5">
                  Copyright &copy; Xelda
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 order-lg-2 order-1 min-vh-100 background-walk-y position-relative overlay-gradient-bottom" data-background="../assets/img/unsplash/login-bg.jpg">
              <div className="absolute-bottom-left index-2">
                <div className="text-light p-5 pb-2">
                  <div className="mb-5 pb-3">
                    <h1 className="mb-2 display-4 font-weight-bold">Feliz día 😉</h1>
                    <h5 className="font-weight-normal text-muted-transparent">Colombia</h5>
                  </div>
                  Photo by <a className="text-light bb" target="_blank" href="https://unsplash.com/photos/a8lTjWJJgLA">Justin Kauffman</a> on <a className="text-light bb" target="_blank" href="https://unsplash.com">Unsplash</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Login>
    </>
  )
}

export default LoginUsers
