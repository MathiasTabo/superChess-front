import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Form, Input, Button, Row, Col,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../helpers/history';

import userActions from '../../redux/actions/user.actions';
import isLoggedIn from '../../helpers/helper';

function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  if (isLoggedIn()) {
    history.push('/');
    return (null);
  }

  const isLoading = useSelector((state: any) => state.loginReducer.loggingin);
  const error = useSelector((state: any) => state.loginReducer.error);

  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  const handleSubmit = (values: { username: string, password: string }) => {
    const user = {
      username: values.username,
      password: values.password,
    };
    dispatch(userActions.login(user));
  };

  return (
    <Row justify="center" align="middle">
      <Col span={6}>
        <h2>{t('user.login.login')}</h2>
        <Form name="loginForm" onFinish={handleSubmit}>
          <Form.Item
            id="username"
            name="username"
            label={t('user.username')}
            rules={[{ required: true, message: t('user.register.usernameRequired') }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            id="password"
            name="password"
            label={t('user.password')}
            rules={[{ required: true, message: t('user.register.passwordRequired') }]}
          >
            <Input.Password />
          </Form.Item>
          { error && error.statusCode === 404 ? <p className="error-message">{t('user.login.loginFailure')}</p> : ''}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              {t('user.login.login')}
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={() => { history.push('/register'); }}>{t('user.register.register')}</Button>
      </Col>
    </Row>
  );
}

export default Login;
