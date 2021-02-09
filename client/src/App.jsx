import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './utils/configureStore';
import { StylesProvider } from '@material-ui/core/styles';

import rootReducer from './reducers/index';

import Login from "./login/Login";
import Account from './account/Account';

const store = configureStore(rootReducer)
const App = () => {
  // TODO: make login path actually login
  // and home path the root
  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/home">
                <div>Home</div>
              </Route>
              <Route exact path="/account">
                <Account />♣
              </Route>
              <Route exact path="/">
                <Login />
              </Route>
            </Switch>
          </Router>
        </Provider>
    </StylesProvider>
  );
};

export default App;
