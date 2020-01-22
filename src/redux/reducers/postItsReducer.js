import {
  LOADING_POST_ITS,
  SET_POST_ITS,
  SET_CURRENT_PAGE,
  CLEAR_FILTERS,
  LOAD_FINISH,
  SET_FILTERS
} from '../actions/actionsTypes'

let initialState = {
  currentPage: 1,
  filters: {},
  isLoading:  true,
  itemsPerPage: 30,
  postIts: [],
  totalItems: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CLEAR_FILTERS: {
      return {
        ...state,
        filters: {}
      }
    }
    case LOADING_POST_ITS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case LOAD_FINISH: {
      return {
        ...state,
        isLoading: false
      }
    }
    case SET_POST_ITS: {
      return {
        ...state,
        postIts: action.data.records 
          ? action.data.records 
          : [],
        currentPage: action.data.currentPage 
          ? action.data.currentPage 
          : 1,
        totalItems: action.data.totalItems 
          ? action.data.totalItems
          : 0,
        itemsPerPage: action.data.itemsPerPage
          ? action.data.itemsPerPage
          : 0,
        isLoading: false
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_FILTERS: {
      return {
        ...state,
        filters: action.filters
      }
    }
    default:
      return state
  }
}
