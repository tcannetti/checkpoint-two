import state from './state'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default createStore(reducers, state, applyMiddleware(thunk))