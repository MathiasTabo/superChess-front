import axios from 'axios';
import SERVER_URL from '../helpers/env';

export default class UserService {
  static SERVER_URL = process.env.REACT_APP_SERVER_URL;

  static login(user: any) {
    return axios.post(`${SERVER_URL}/login`, {
      userName: user.username,
      password: user.password,
    });
  }

  static register(user: any) {
    return axios.post(`${SERVER_URL}/register`, {
      userName: user.username,
      password: user.password,
      confirmPassword: user.confirmPassword,
    });
  }
}
