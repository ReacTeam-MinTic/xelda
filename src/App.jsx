import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layouts from "layouts/layouts";
import Login from "layouts/login";
import Index from "pages/index";
import ListUsers from "pages/Usuarios/listusers";
import ListProducts from "pages/Productos/listproducts";
import FormUsers from "pages/Usuarios/formusers";
import FormProducsts from "pages/Productos/formproducts";
import LoginUser from "pages/Registro/loginUser";
import AuthRegister from "pages/Registro/auth-register";
import Ventas from "pages/Ventas/ventas";

// Un Route por cada Layouts - Ver los layouts como pages-templante (NO como componentes)
// Agreagr otro Toute para Login

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/ventas", "/formusers", "/listusers", "/formproducts", "/listproducts"]}>
          <Layouts>
            <Switch>
              <Route path="/ventas">
                <Ventas />
              </Route>
              <Route path="/formusers">
                <FormUsers />
              </Route>
              <Route path="/listusers" >
                <ListUsers />
              </Route>
              <Route path="/formproducts" >
                <FormProducsts />
              </Route>
              <Route path="/listproducts" >
                <ListProducts />
              </Route>
            </Switch>
          </Layouts>
        </Route>
        <Route path={["/login", "/auth-register"]}>
          <Login>
            <Switch>
              <Route path="/login">
                <LoginUser />
              </Route>
              <Route path="/auth-register">
                <AuthRegister />
              </Route>
            </Switch>
          </Login>
        </Route>
        <Route path={["/"]}>
          <Layouts>
            <Switch>
              <Route path="/">
                <Index />
              </Route>
            </Switch>
          </Layouts>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
