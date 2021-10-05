import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SegundaApp from "pages/practicasReact/segundaApp";


const AppPrueba = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/segundapp"]}>
          <SegundaApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppPrueba;
