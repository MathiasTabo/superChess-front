import userConstants from '../constants/user.constants';

function loginReducer(state = {}, action: any) {
  if (action.type === userConstants.LOGIN_REQUEST) {
    return { loggingin: true };
  } if (action.type === userConstants.LOGIN_SUCCESS) {
    const user = action.newUser.data.id;
    sessionStorage.setItem('user', user);
    return { user, isLoggedIn: true };
  } if (action.type === userConstants.LOGIN_FAILURE) {
    return { error: action.error };
  } if (action.type === userConstants.LOGOUT) {
    console.log('LOGGING OUT');
    return { isLoggedIn: false };
  }
  return state;
}

export default loginReducer;
