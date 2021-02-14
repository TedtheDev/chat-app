import { combineReducers } from 'redux'

import authentication from '../auth/auth-ducks';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
//   todos: todosReducer,
//   filters: filtersReducer
    test: () => ({}),
    authentication,
});

export default rootReducer;