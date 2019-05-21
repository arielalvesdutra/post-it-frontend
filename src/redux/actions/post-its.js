import {
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

export const setPostIts = postIts => {
  return {
    type: SET_POST_ITS,
    postIts: postIts
  }
}
