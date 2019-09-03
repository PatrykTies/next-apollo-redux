import { actionTypes } from './actions'

export const initialState = {
  data: {},
  error: false
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state.data,
        ...action.payload.data
      }

    case actionTypes.LOAD_DATA_ERROR:
      return {
        ...state,
        ...{ error: action.error }
      }

    default:
      return state
  }
}

export default reducer
