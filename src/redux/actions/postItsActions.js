import {
  LOADING_POST_ITS,
  SET_POST_ITS,
  SET_CURRENT_PAGE,
  SET_FILTERS,
  CLEAR_FILTERS,
  LOAD_FINISH
} from './actionsTypes'
import axios from '../../axios'
import { buildQueryString } from '../../helpers/query-string-builder'


export const createPostIt = (postIt) => {
  return (dispatch) => {

    dispatch(clearFilters())
    dispatch(loadingPostIts())

    axios.post('/post-its', {
      title: postIt.title,
      description: postIt.description    
    })
      .then(_ => dispatch(fetchPostIts()))
      .catch(_ => dispatch(loadFinish()))
  }
}

export const deletePostIt = id => {
  return (dispatch, getState) => {
    
    dispatch(loadingPostIts())

    axios.delete(`/post-its/${id}`)
      .then(_ => {
        const { currentPage, totalItems, itemsPerPage } = getState()
        let { filters } = getState()
        filters.page = calcCurrentPage(currentPage, (totalItems -1), itemsPerPage)

        dispatch(fetchPostIts(filters))
      })
      .catch(_ => dispatch(loadFinish()))
  }
}

export const fetchPostIts = (filters = {}) => {

  return dispatch => {
    dispatch(loadingPostIts())

    const queryString = buildQueryString(filters)
    dispatch(setFilters(filters))

    axios.get(`/post-its${queryString}`, { timeout: 5000})
      .then(response => {        
        const data = response.data
        dispatch(setPostIts(data))
      })
      .catch(_ => dispatch(setPostIts([])))
  }
}

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS
  }
}

export const loadingPostIts = () => {
  return  {
    type: LOADING_POST_ITS
  }
}

export const loadFinish = () => {
  return  {
    type: LOAD_FINISH
  }
}

export const setCurrentPage = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  }
}

export const setPostIts = data => {
  return {
    type: SET_POST_ITS,
    data: data
  }
}

export const setFilters = filters => {
  return {
    type: SET_FILTERS,
    filters: filters
  }
}

const calcCurrentPage = (actualPage, totalItems, itemsPerPage) => {

  const maxOfPages = Math.ceil(totalItems / itemsPerPage)
  const calculatedPage = (maxOfPages < actualPage)
      ? maxOfPages
      : actualPage

  return calculatedPage
}
