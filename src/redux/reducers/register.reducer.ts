import userConstants from '../constants/user.constants';

function registerReducer(state = {}, action: any) {
  if (action.type === userConstants.REGISTER_REQUEST) {
    return { waitingForRegister: true };
  } if (action.type === userConstants.REGISTER_SUCCESS) {
    return {};
  } if (action.type === userConstants.REGISTER_FAILURE) {
    return { error: action.error };
  }
  return state;
}

export default registerReducer;
