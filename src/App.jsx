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
import AppProducts from "pages/products/appProducts";
import AppSale from "pages/sales/appSales";
// Un Route por cada Layouts - Ver los layouts como pages-templante (NO como componentes)
// Agreagr otro Toute para Login

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/ventas", "/listventas", "/users", "/products", "/sales"]}>
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
              <Route path="/products" exact>
                <AppProducts />
              </Route>
              <Route path="/sales" exact>
                <AppSale />
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
        <Route path={["/"]}>
          <Layouts>
            <Switch>
              <Route path="/" exact>
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
