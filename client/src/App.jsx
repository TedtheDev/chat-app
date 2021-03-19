import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './utils/configure-store';
import { StylesProvider } from '@material-ui/core/styles';

import rootReducer from './reducers/index';
import { authenticateOnLoad } from './auth/auth-ducks';

import ProtectedRoute from './components/ProtectedRoute';
import Login from "./login/Login";
import Account from './account/Account';
import Home from './home/Home';

const store = configureStore(rootReducer);

store.dispatch(authenticateOnLoad());

const App = () => {
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
