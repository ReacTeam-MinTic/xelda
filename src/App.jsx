import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import ListUsers from "pages/listusers";
import ListVentas from "pages/listventas";
import ListProducts from "pages/listproducts";
import Layouts from "layouts/layouts";
import Ventas from "pages/Ventas";
import FormUsers from "pages/formusers";
import FormProducsts from "pages/formproducts";

// Un Route por cada Layouts - Ver los layouts como pages-templante (NO como componentes)
// Agreagr otro Toute para Login

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={["/listusers", "/listproducts", "/formusers", "/ventas", "/listventas", "/formproducts", "/"]}> 
          <Layouts>
            <Switch>
              <Route path="/ventas" exact>
                <Ventas/>
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
                <FormProducsts/>
              </Route>
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
