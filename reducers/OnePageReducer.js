import { combineReducers } from 'redux';
import {MOVE_PAGE} from '../actions/OnePage';

let initState = {
  touchStart: 0,
  direction: 0,
  touchControl: false,
  active: 0,
  allow: false // 为false的时候不会update component
};

function OnePageReducer(state=initState, action){
    switch (action.type) {
      case MOVE_PAGE:
        return Object.assign({}, state, action.state);
      default:
      return state;

    }
}

export default OnePageReducer
