import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import ListUsers from "pages/listusers";
import ListProducts from "pages/listproducts";
import Layouts from "layouts/layouts";
import Form_users from "pages/formusers";
import Borrar from "pages/borrar";

const App = () => {
  return (
    <>
      <Router>
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
              < Form_users/>
            </Route>
            <Route path="/" exact>
              <Index />
            </Route>
        </Switch>
        </Layouts>
      </Router>
    </>
  );
};

export default App;
