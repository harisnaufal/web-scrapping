import * as Actions from '../action/Actions';
import * as Api from '../middleware/api.js';

export function getUrlData(url) {
  return (dispatch) => {
    return Api.sendUrlLink(url)
      .then((response) => {
        console.log('resss', response);
        dispatch({
          type: Actions.GET_URL_DETAIL,
          allData: response
        });
      }, (error) => {
        dispatch({
          type: Actions.GET_URL_DETAIL_FAILED,
          error: error
        });
      });
  };
}
