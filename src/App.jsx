import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import Layouts from "layouts/layouts";
import Login from "layouts/login";
import LoginUsers from "pages/LoginUsers";
import AppUser from "pages/formUser/appUser";
import AppProducts from "pages/products/appProducts";
import AppSale from "pages/sales/appSales";
import IndexSup from "layouts";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from "context/userContext";
// Un Route por cada Layouts - Ver los layouts como pages-templante (NO como componentes)
// Agreagr otro Toute para Login

const App = () => {
  const [userData, setUserData] = useState({});
  return (
    <Auth0Provider
      domain="misiontic-sales2021.us.auth0.com"
      clientId="3G27oOyaGGQ3fzLbjv7xwzZIcTQJqaGG"
      redirectUri="http://localhost:3000/index"
      audience="api-xelda-auth"
    >
      <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Switch>
          <Route path={["/products","/sales", "/users"]}>
            <Layouts>
              <Switch>
                <Route path="/products" exact>
                  <AppProducts />
                </Route>
                <Route path="/sales" exact>
                  <AppSale />
                </Route>
                <Route path="/users" exact>
                  <AppUser />
                </Route>
              </Switch>
            </Layouts>
          </Route>
          <Route path={["/index"]}>
            <IndexSup>
              <Switch>
                <Route path="/index" exact>
                  <Index />
                </Route>
              </Switch>
            </IndexSup>
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
      </UserContext.Provider>
    </Auth0Provider>
  );
};

export default App;
