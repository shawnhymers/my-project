import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import usersReducer from './reducers/users';
import eventsReducer from './reducers/events';
import navigationReducer from './reducers/navigation'
import submitReducer from './reducers/submits'
const initialState = {};

const rootReducer = combineReducers({
  events:eventsReducer,
  users: usersReducer,
  navigation:navigationReducer,
  submits:submitReducer

})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;




// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(thunk)
//   )
// )

// const store = createStore(()=>[], {}, applyMiddleware());
