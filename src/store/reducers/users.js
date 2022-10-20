import {FETCH_USERS,UPDATE_USERS} from '../actions/types/users';

const initialState = {
  currentUser: null
}

const usersReducer =( state= initialState, action)=>{
  switch (action.type){
    case FETCH_USERS:
      return{
        ...state,
        allUsers:action.payload
      };
      break
    case UPDATE_USERS:
      return{
        ...state,
        currentUser:action.payload
      };
      break
    default:
      return state;
  }
}

export default usersReducer;
