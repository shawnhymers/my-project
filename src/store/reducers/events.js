import {FETCH_EVENTS,UPDATE_EVENT} from '../actions/types/events';

const initialState = {
  allEvents: [],
  numberOfClicks:0,
  currentEvent: null
}

const eventsReducer =( state= initialState, action)=>{
  console.log('events reducer reached')
  console.log('starting state:')
  console.log(state)
  switch (action.type){
    case FETCH_EVENTS:

      return{
        ...state,
        allEvents:action.payload
      };
      break
    case UPDATE_EVENT:
      console.log('is an update event type')
      return{
        numberOfClicks:action.payload,
        currentEvent:action.payload
      };
      break
    default:
      return state;
  }
}

export default eventsReducer;
