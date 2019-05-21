import {
  SET_POST_ITS
} from '../actions/actionsTypes'

let initialState = {
  postIts: [],
  isLoading:  true
}

export default (state = initialState, action) => {

  switch(action.type) {
    case SET_POST_ITS: {
      return {
        ...state,
        postIts: action.postIts,
        isLoading: false
      }
    }
    default:
      return state
  }
}
