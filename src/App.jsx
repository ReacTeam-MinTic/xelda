
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Index from 'pages/index';
import Users from 'pages/users';

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/users">
           <Users />
        </Route>
        <Route path='/'>
           <Index />
        </Route>
      </Switch>
    </Router>
  </>
  
  )
}

export default App;

