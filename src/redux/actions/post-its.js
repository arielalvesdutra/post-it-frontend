import {
  LOADING_POST_ITS,
  SET_POST_ITS
} from './actionsTypes'

import axios from '../../axios'

export const createPostIt = (postIt) => {

  return dispatch => {
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
    
    dispatch(loadingPostIts())

    axios.delete(`/post-its/${id}`)
      .then(response => dispatch(fetchPostIts()))
      .catch(error => error)
  }
}

export const fetchPostIts = () => {

  return dispatch => {

    axios.get('/post-its')
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

    dispatch(loadingPostIts())
    
    axios.get(`/search/post-its/f?title=${title}`)
      .then(response => {
        const data = response.data
        dispatch(setPostIts(data))
      })
      .catch(error => error)
  }
}

export const setPostIts = postIts => {
  return {
    type: SET_POST_ITS,
    postIts: postIts
  }
}
