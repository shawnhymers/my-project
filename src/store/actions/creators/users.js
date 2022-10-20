import {FETCH_USERS,UPDATE_USERS} from '../types/users';

// synchronous action
export const updateUser = (eventId) => {
  return{
    type: UPDATE_USERS,
    payload: userId
  }
}

// asynchronous action
export const fetchUsers = () => {
  return (dispatch)=>{
    fetch(`${URL}/users`)
      .then(data=>{
        dispatch({
          type: UPDATE_USERS,
          payload: data
        })
      }).catch(function(err){
        console.log(err)
      })
  }
}
