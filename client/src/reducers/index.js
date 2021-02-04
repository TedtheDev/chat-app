import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
//   todos: todosReducer,
//   filters: filtersReducer
    test: () => ({}),
});

export default rootReducer;