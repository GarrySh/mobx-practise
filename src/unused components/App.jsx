import React from 'react';
import DevTools from 'mobx-react-devtools';
import { observable, computed, configure, action } from 'mobx';
import './App.css';
import Counter from './Counter';
import UserNickName from './UserNickName';

configure({ enforceActions: 'observed' });

const counterState = observable(
  {
    count: 0,
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },
  {
    increment: action('Plus one'),
    decrement: action('Minus one'),
  }, {
    name: 'nickNameObservableObject'
  }
);

const nickName = new (class {
  @observable firstName = 'Garry';

  @observable age = 30;

  @computed get nickName() {
    return `${this.firstName}${this.age}`;
  }

  increment() {
    this.age += 1;
  }

  decrement() {
    this.age -= 1;
  }
})();

const App = () => {
  return (
    <div className="App">
      <DevTools />
      <h1>Hello world!</h1>
      <Counter store={counterState} />
      <UserNickName store={nickName} />
    </div>
  );
};

export default App;
