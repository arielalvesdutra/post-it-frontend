import {
  LOADING_POST_ITS,
  SET_POST_ITS
} from '../actions/actionsTypes'

let initialState = {
  postIts: [],
  isLoading:  true,
  currentPage: 1,
  totalItems: 0,
  itemsPerPage: 30
}

export default (state = initialState, action) => {

  switch(action.type) {
    case LOADING_POST_ITS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case SET_POST_ITS: {
      return {
        ...state,
        postIts: action.data.records,
        currentPage: action.data.currentPage,
        totalItems: action.data.totalItems,
        itemsPerPage: action.data.itemsPerPage,
        isLoading: false
      }
    }
    default:
      return state
  }
}
