import * as Actions from '../action/Actions.js';

const initialData = ({
  allData: {},
  historyData: []
});

const rootReducer = (state = initialData, action) => {
  let history = [];
  if (action.historyData !== undefined) {
    history.push(action.historyData);
  }
  switch (action.type) {
    case Actions.GET_URL_DETAIL:
      return {
        allData: action.allData,
        historyData: history
      }
    default:
      return state
  }
}

export default rootReducer;