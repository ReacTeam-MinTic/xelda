import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import ListUsers from "pages/listusers";
import ListProducts from "pages/listproducts";
import Layouts from "layouts/layouts";
import FormUsers from "pages/formusers";
import Edad from "pages/edad";

const App = () => {
  return (
    <>
      <Router>
      <Layouts>
        <Switch>
            <Route path="/edad" exact>
              <Edad />
            </Route>
            <Route path="/listusers" exact>
              <ListUsers />
            </Route>
           
            <Route path="/listproducts" exact>
              <ListProducts />
            </Route>
            <Route path="/formusers" exact>
              < FormUsers/>
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
