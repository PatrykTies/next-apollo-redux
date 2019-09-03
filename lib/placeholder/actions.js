export const actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_ERROR: 'LOAD_DATA_ERROR'
}

import jsonPlaceholderApi from '../api/jsonPlaceholderApi.js';

export const loadData = (id) => async dispatch => {
    const response = await jsonPlaceholderApi.get(`/posts/${id}`)
    dispatch({type: actionTypes.LOAD_DATA_SUCCESS, payload: response}) 
}

export function loadDataError (error) {
  return {
    type: actionTypes.LOAD_DATA_ERROR,
    error
  }
}
