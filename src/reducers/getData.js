import * as Actions from '../action/Actions.js';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  allData: {}
});

function rootReducer(state = initialState, action = null) {
  console.log('action', action);
  switch (action.type) {
    case Actions.GET_URL_DETAIL:
      return state.merge({
        allData: action.allData
      });
    default:
      return state;
  }
}

export default rootReducer;
