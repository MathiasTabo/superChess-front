import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Row, Col, Form, Input, Button,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../redux/actions/user.actions';
import history from '../../helpers/history';

interface User {
  username: string,
  password: string,
  confirmPassword: string
}

function Register() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isLoading = useSelector((state: any) => state.registerReducer.waitingForRegister);
  const error = useSelector((state: any) => state.registerReducer.error);

  const handleSubmit = (values: User) => {
    const user = {
      username: values.username,
      password: values.password,
      confirmPassword: values.password,
    };
    dispatch(userActions.register(user));
  };

  return (
    <Row justify="center" align="top">
      <Col span={6}>
        <h2>{t('user.register.register')}</h2>
        <Form name="registrationForm" onFinish={handleSubmit}>
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
          <Form.Item
            id="confirmPassword"
            name="confirmPassword"
            label={t('user.confirmPassword')}
            rules={[
              {
                required: true, message: t('user.register.passwordRequired'),
              }, ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(t('user.register.passwordNotMatch'));
                },
              }),
            ]}
          >
            <Input.Password />
            { error ? <p className="error-message">{error.message}</p> : ''}
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              loading={isLoading}
            >
              {t('user.register.registerButton')}
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={() => { history.push('/login'); }}>{t('user.login.login')}</Button>
      </Col>
    </Row>
  );
}

export default Register;
