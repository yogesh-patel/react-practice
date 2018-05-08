import auth from './auth';
import dashboard from './dashboard';
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  auth,
  dashboard1:dashboard,
  routing: routerReducer
})