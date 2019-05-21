import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import postIts from './reducers/post-its'

export default createStore(postIts, applyMiddleware(thunk))
