import {
  LOADING_POST_ITS,
  SET_POST_ITS,
  SET_TITLE_FILTER,
  SET_CURRENT_PAGE,
  CLEAR_FILTERS
} from './actionsTypes'

import axios from '../../axios'
import { buildQueryString } from '../../query-string-builder'

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS
  }
}

export const createPostIt = (postIt) => {

  return dispatch => {

    dispatch(clearFilters())
    dispatch(loadingPostIts())

    axios.post('/post-its', {
      title: postIt.title,
      description: postIt.description    
    })
      .then(response => dispatch(fetchPostIts()))
      .catch(error => error)
  }
}

export const deletePostIt = id => {
  return dispatch => {
    
    dispatch(clearFilters())
    dispatch(loadingPostIts())

    axios.delete(`/post-its/${id}`)
      .then(response => dispatch(fetchPostIts()))
      .catch(error => error)
  }
}

export const fetchPostIts = (filters = {}) => {

  return dispatch => {

    const queryString = buildQueryString(filters)

    axios.get(`/post-its${queryString}`)
      .then(response => {
        const data = response.data
        dispatch(setPostIts(data))
      })
      .catch(error => error)
  }
}

export const loadingPostIts = () => {
  return  {
    type: LOADING_POST_ITS
  }
}

export const searchPostIts = title => {
  return dispatch => {

    const queryString = title
      ? buildQueryString({title: title})
      : ''

    dispatch(loadingPostIts())


    dispatch(setCurrentPage(1))
    dispatch(setTitleFilter(title))
    
    axios.get(`/post-its${queryString}`)
      .then(response => {
        const data = response.data
        dispatch(setPostIts(data))
      })
      .catch(error => error)
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

export const setTitleFilter = title => {
  return {
    type: SET_TITLE_FILTER,
    title: title
  }
}
