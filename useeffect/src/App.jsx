import React from 'react';
import Clock from './components/Clock';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div>
      <Welcome />
      <Clock />
    </div>
  );
};

export default App;