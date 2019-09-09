import {
  LOADING_POST_ITS,
  SET_POST_ITS,
  SET_TITLE_FILTER,
  SET_CURRENT_PAGE,
  CLEAR_FILTERS
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
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_TITLE_FILTER: {

      const filters = action.title
          ? { title: action.title }
          : { }

      return {
        ...state,
        filters: filters
      }
    }
    default:
      return state
  }
}
