import React, { useState } from 'react';
import {
  Menu, Row, Button, Col,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import isLoggedIn from '../helpers/helper';
import history from '../helpers/history';
import userActions from '../redux/actions/user.actions';

function Header() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState('Home');
  const user = useSelector((state: any) => state.loginReducer.user);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  const onClick = (event: any) => {
    setCurrent(event.key);
    console.log('key', event.key);
    history.push({ pathname: `/${event.key}` });
  };

  const logout = () => {
    dispatch(userActions.logout());
    setLoggedIn(isLoggedIn());
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Col>
        <Menu.Item key="home">{t('navigation.home')}</Menu.Item>
      </Col>
      <Col flex="auto" />
      <Col>
        { loggedIn ? (
          <Row>
            <Col>
              <p>{user}</p>
              <Button onClick={logout}>{t('user.logout')}</Button>
            </Col>
          </Row>
        ) : <Menu.Item key="login">login</Menu.Item> }
      </Col>
    </Menu>
  );
}

export default Header;
