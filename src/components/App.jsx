import React from 'react';
import DevTools from 'mobx-react-devtools';
import './App.css';
import Counter from './Counter';

const App = () => {
  return (
    <div className="App">
      <DevTools />
      <h1>Hello world!</h1>
      <Counter />
    </div>
  );
};

export default App;
