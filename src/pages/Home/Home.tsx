import React from 'react';
import isLoggedIn from '../../helpers/helper';
import history from '../../helpers/history';

function Home() {
  if (!isLoggedIn()) {
    history.push('/login');
  }

  return (
    <div>
      <p>Home  works</p>
    </div>
  );
}

export default Home;
