import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Reducers from '../redux/reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  Reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

export default store;
