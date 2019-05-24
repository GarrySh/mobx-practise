import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Counter extends React.Component {
  @observable count = 0;

  handleIncrement = () => {
    this.count = +1;
  };

  handleDecrement = () => {
    this.count = -1;
  };

  render() {
    return (
      <div className="Counter">
        <h1>{this.count}</h1>
        <button type="button">-1</button>
        <button type="button">+1</button>
      </div>
    );
  }
}

export default Counter;
