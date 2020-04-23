import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

export const usersReducer = (state = {}, action) => { 
  Object.freeze(state); 
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]})
    default:
      return state; 
  }
}