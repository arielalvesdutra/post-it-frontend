import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import postIts from './reducers/postItsReducer'

export default createStore(postIts, applyMiddleware(thunk))
