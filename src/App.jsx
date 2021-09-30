import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import ListUsers from "pages/listusers";
import ListProducts from "pages/listproducts";
import Layouts from "layouts/layouts";
import FormUsers from "pages/formusers";
import Borrar from "pages/borrar";

// Un Route por cada Layouts - Ver los layouts como pages-templante (NO como componentes)
//Agreagr otro Toute para Login

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={["/listusers", "/listproducts", "/formusers", "/borrar", "/"]}> 
          <Layouts>
            <Switch>
              <Route path="/borrar" exact>
                <Borrar />
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
