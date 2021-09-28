import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import Users from "pages/users";
import Layouts from "layouts/layouts";

const App = () => {
  return (
    <>
      <Router>
      <Layouts>
        <Switch>
            <Route path="/users" exact>
              <Users />
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
