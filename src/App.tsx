import React, { Suspense } from 'react';
import Routes from './routing/Routes';

function App() {
  return (
    <main className="App">
      <Suspense fallback={<></>}>
        <Routes />
      </Suspense>
    </main>
  );
}

export default App;
