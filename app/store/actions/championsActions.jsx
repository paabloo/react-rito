import { FETCH_SIMPLE_CHAMPS_DATA, API_LOADING, API_FINISHED } from '../actionTypes';

export function getSimpleChampions() {
  return (dispatch, state, api) => {
    dispatch({type: API_LOADING});
    api.championsAPI.getSimpleChampions().then(response => {
      dispatch({type: FETCH_SIMPLE_CHAMPS_DATA, champions: response.data.data});
      dispatch({type: API_FINISHED});
    })
    .catch((response) => {
          dispatch({type: API_FINISHED});
          console.error(response);
        })
  }
}
