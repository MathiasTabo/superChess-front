import { combineReducers } from 'redux';
import registerReducer from './register.reducer';
import loginReducer from './login.reducer';

const Reducers = combineReducers({
  registerReducer,
  loginReducer,
});

export default Reducers;
