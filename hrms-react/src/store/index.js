import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducer';

export default () => {
  const middlewares = applyMiddleware(thunk,logger);
  const store = createStore(
      rootReducer,
      middlewares
  );

  return store;

}
