import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { ApolloClient, ApolloProvider, InMemoryCache  } from '@apollo/client';
import configureStore from './utils/configure-store';
import { StylesProvider } from '@material-ui/core/styles';

import rootReducer from './reducers/index';
import { authenticateOnLoad } from './auth/auth-ducks';

import ProtectedRoute from './components/ProtectedRoute';
import Login from "./login/Login";
import Account from './account/Account';
import Profile from './account/Profile';
import Home from './home/Home';
import config from './config/config';

const client = new ApolloClient({
  uri: `${config.apiServiceURL}/graphql`,
  cache: new InMemoryCache(),
  credentials: 'include'
});

const store = configureStore(rootReducer);

store.dispatch(authenticateOnLoad());

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StylesProvider injectFirst>
        <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/account">
                  <Account />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <ProtectedRoute exact path="/">
                  <Home />
                </ProtectedRoute>
                <ProtectedRoute exact path="/profile">
                  <Profile />
                </ProtectedRoute>
              </Switch>
            </Router>
          </Provider>
      </StylesProvider>
    </ApolloProvider>
  );
};

export default App;
