import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "pages/index";
import Users from "pages/users";
import Layouts from "layouts/layouts";
import Form_users from "pages/form_users";

const App = () => {
  return (
    <>
      <Router>
      <Layouts>
        <Switch>
            <Route path="/users" exact>
              <Users />
            </Route>
            <Route path="/form_users" exact>
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
