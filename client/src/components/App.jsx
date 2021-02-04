import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from '../utils/configureStore';

import rootReducer from '../reducers/index';

import Login from "../pages/Login";

const store = configureStore(rootReducer)
const App = () => {
  // TODO: make login path actually login
  // and home path the root
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/home">
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
    </Provider>
    
  );
};

export default App;
