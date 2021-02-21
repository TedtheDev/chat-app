import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './utils/configureStore';
import { StylesProvider } from '@material-ui/core/styles';

import rootReducer from './reducers/index';

import ProtectedRoute from './components/ProtectedRoute';

import Login from "./login/Login";
import Account from './account/Account';
import Home from './home/Home';

const store = configureStore(rootReducer);

const App = () => {
  // TODO: make login path actually login
  // and home path the root
  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
          <Router>
            <Switch>
              <ProtectedRoute exact path="/">
                <Home />
              </ProtectedRoute>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </Provider>
    </StylesProvider>
  );
};

export default App;
