import React from 'react';
import Login from './Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  // TODO: make login path actually login
  // and home path the root
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>
        <Route path='/home'>
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;