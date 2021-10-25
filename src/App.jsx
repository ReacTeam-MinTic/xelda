import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import Layouts from "layouts/layouts";
import AppUser from "pages/formUser/appUser";
import AppProducts from "pages/products/appProducts";
import AppSale from "pages/sales/appSales";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from "context/userContext";
import PrivateRoute from "components/auth0/privateRoute";
import PublicPage from "pages/publicPage";
// Un Route por cada Layouts - Ver los layouts como pages-templante (NO como componentes)
// Agreagr otro Toute para Login

const App = () => {
  const [userData, setUserData] = useState({});
  return (
    <Auth0Provider
    domain="xelda.us.auth0.com"
    clientId="vIWD5IdvNAKfDeUT23be8DdaJpw8JEIu"
    redirectUri="https://gentle-earth-75322.herokuapp.com/"
    audience= 'api-autenticacion-xelda'>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Switch>
            <Route path={["/users", "/products", "/sales", "/dashboard"]}>
              <Layouts>
                <Switch>
                  <Route path="/users" exact>
                    <PrivateRoute rolesList={["Admin"]}>
                      <AppUser />
                    </PrivateRoute>
                  </Route>
                  <Route path="/products" exact>
                    <PrivateRoute rolesList={["Admin", "Vendedor"]}>
                      <AppProducts />
                    </PrivateRoute>
                  </Route>
                  <Route path="/sales" exact>
                    <PrivateRoute rolesList={["Admin", "Vendedor"]}>
                      <AppSale />
                    </PrivateRoute>
                  </Route>
                  <Route path="/dashboard" exact>
                    <PrivateRoute rolesList={["Admin", "Vendedor"]}>
                      <Index />
                    </PrivateRoute>
                  </Route>
                </Switch>
              </Layouts>
            </Route>
            <Route path={["/"]}>
              <Switch>
                <Route path="/" exact>
                  <PublicPage />
                </Route>
              </Switch>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </Auth0Provider>
  );
};

export default App;
