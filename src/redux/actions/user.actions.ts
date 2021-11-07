import UserService from '../../services/user.service';
import userConstants from '../constants/user.constants';
import history from '../../helpers/history';

function register(user: any) {
  return (dispatch: any) => {
    dispatch({ type: userConstants.REGISTER_REQUEST, user });
    UserService.register(user).then(
      (newUser) => {
        dispatch({ type: userConstants.REGISTER_SUCCESS, newUser });
        history.push('/login');
      },
      (error) => {
        const err = error.response.data;
        dispatch({ type: userConstants.REGISTER_FAILURE, error: err });
      },
    );
  };
}

function login(user: any) {
  return (dispatch: any) => {
    dispatch({ type: userConstants.LOGIN_REQUEST, user });
    UserService.login(user).then(
      (newUser) => {
        dispatch({ type: userConstants.LOGIN_SUCCESS, newUser });
        localStorage.setItem('user', newUser.data.id);
        history.push('/');
      },
      (error) => {
        const err = error.response.data;
        dispatch({ type: userConstants.LOGIN_FAILURE, error: err });
      },
    );
  };
}

function logout() {
  return (dispatch: any) => {
    dispatch({ type: userConstants.LOGOUT });
    localStorage.removeItem('user');
    history.push('/login');
  };
}

const userActions = {
  register,
  login,
  logout,
};

export default userActions;
