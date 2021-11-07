import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import routes from './routing/AppRoutes';
import history from './helpers/history';
import Header from './components/Header';

function App() {
  useEffect(() => {
    history.listen((location) => {
      console.log(location);
    });
  }, []);

  return (
    <div>
      <Router history={history}>
        <Header />
        { routes }
      </Router>
    </div>
  );
}

export default App;
