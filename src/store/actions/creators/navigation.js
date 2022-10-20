import {CHANGE_VIEW} from '../types/navigation';

export const changeView=(view)=>{
  console.log('change view action reached')
  console.log('changing to this view...')
  console.log(view)
  return{
    type: CHANGE_VIEW,
    payload:view
  }
}
