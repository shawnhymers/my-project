import {CHANGE_VIEW, RESET_VIEW} from '../actions/types/navigation';

const initialState = {
  currentView: 'flights'
}

const navigationReducer =( state= initialState, action)=>{
  console.log('navigation reducer reached')
  console.log('starting state:')
  console.log(state)
  switch (action.type){
    case CHANGE_VIEW:
      return{
        ...state,
        currentView:action.payload
      };
      break

    case RESET_VIEW:
      return{
        ...state,
        currentView:'flights'
      };
      break

    default:
      return state;
  }
}

export default navigationReducer;
