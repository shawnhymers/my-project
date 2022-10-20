import {FETCH_EVENTS,UPDATE_EVENT} from '../types/events';

// synchronous action
export const updateEvent = (eventId) => {
  return{
    type: UPDATE_EVENT,
    payload: eventId
  }
}
export const addClick=(numberOfClicks)=>{
  console.log('add click action reached')
  return{
    type: UPDATE_EVENT,
    payload:numberOfClicks
  }
}

// asynchronous action
export const fetchEvents = () => {
  return (dispatch)=>{
    fetch(`${URL}/events`)
      .then(data=>{
        dispatch({
          type: FETCH_EVENTS,
          payload: data
        })
      }).catch(function(err){
        console.log(err)
      })
  }
}
