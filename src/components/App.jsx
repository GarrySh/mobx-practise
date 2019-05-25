import React from 'react';
import DevTools from 'mobx-react-devtools';
import { observable } from 'mobx';
import './App.css';
import Counter from './Counter';

const counterState = observable({
  count: 0,
  increment() {
    this.count += 1;
  },
  decrement() {
    this.count -= 1;
  },
});

const App = () => {
  return (
    <div className="App">
      <DevTools />
      <h1>Hello world!</h1>
      <Counter store={counterState} />
    </div>
  );
};

export default App;
