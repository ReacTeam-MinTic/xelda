import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import Layouts from "layouts/layouts";
import Login from "layouts/login";
import LoginUser from "pages/loginUser";
import Ventas from "pages/Ventas";
import ListVentas from "pages/listventas";
import AuthRegister from "pages/auth-register";
import AppUser from "pages/formUser/appUser";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginUsers from "pages/LoginUsers";

// Un Route por cada Layouts - Ver los layouts como pages-templante (NO como componentes)
// Agreagr otro Toute para Login

const App = () => {
  return (
    <Auth0Provider
    domain="xelda.us.auth0.com"
    clientId="vIWD5IdvNAKfDeUT23be8DdaJpw8JEIu"
    redirectUri={window.location.origin}
    >
      <Router>
        <Switch>
          <Route path={["/test", "/ventas", "/listventas", "/formproducts", "/listproducts", "/users"]}>
            <Layouts>
              <Switch>
                <Route path="/ventas" exact>
                  <Ventas />
                </Route>
                <Route path="/listventas" exact>
                  <ListVentas />
                </Route>
                <Route path="/users" exact>
                  <AppUser />
                </Route>
              </Switch>
            </Layouts>
          </Route>
          <Route path={["/login", "/auth-register"]}>
            <Login>
              <Switch>
                <Route path="/login" exact>
                  <LoginUser />
                </Route>
                <Route path="/auth-register" exact>
                  <AuthRegister />
                </Route>
              </Switch>
            </Login>
          </Route>
          <Route path={["/index"]}>
            <Layouts>
              <Switch>
                <Route path="/index" exact>
                  <Index />
                </Route>
              </Switch>
            </Layouts>
          </Route>
          <Route path={["/"]}>
            <Login>
              <Switch>
                <Route path="/" exact>
                  <LoginUsers />
                </Route>
              </Switch>
            </Login>
          </Route>
        </Switch>
      </Router>
    </Auth0Provider>
  );
};

export default App;
