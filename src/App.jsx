import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import ListUsers from "pages/listusers";
import ListProducts from "pages/listproducts";
import Layouts from "layouts/layouts";
import FormUsers from "pages/formusers";
import FormProducsts from "pages/formproducts";
import Login from "layouts/login";
import LoginUser from "pages/loginUser";
import Ventas from "pages/Ventas";
import ListVentas from "pages/listventas";

// Un Route por cada Layouts - Ver los layouts como pages-templante (NO como componentes)
//Agreagr otro Toute para Login

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/listusers", "/listproducts", "/formusers"]}>
          <Layouts>
            <Switch>
              <Route path="/ventas" exact>
                <Ventas />
              </Route>
              <Route path="/listventas" exact>
                <ListVentas />
              </Route>
              <Route path="/listusers" exact>
                <ListUsers />
              </Route>
              <Route path="/listproducts" exact>
                <ListProducts />
              </Route>
              <Route path="/formusers" exact>
                <FormUsers />
              </Route>
              <Route path="/formproducts" exact>
                <FormProducsts />
              </Route>
            </Switch>
          </Layouts>
        </Route>
        <Route path={["/login"]}>
          <Login>
            <Switch>
              <Route path="/login" exact>
                <LoginUser />
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
