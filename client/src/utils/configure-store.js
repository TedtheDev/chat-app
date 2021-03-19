import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'


export default function configureStore(rootReducer, preloadedState) {
  const middlewares = [ thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store;
}