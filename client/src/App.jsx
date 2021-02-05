import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './utils/configureStore';
import { StylesProvider } from '@material-ui/core/styles';

import rootReducer from './reducers/index';

import Login from "./pages/Login";

const store = configureStore(rootReducer)
const App = () => {
  // TODO: make login path actually login
  // and home path the root
  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/">
                <Login />
              </Route>
              <Route path="/home">
                <div>Home</div>
              </Route>
              <Route path="/account">
                <div>Account</div>
              </Route>
            </Switch>
          </Router>
        </Provider>
    </StylesProvider>
  );
};

export default App;
