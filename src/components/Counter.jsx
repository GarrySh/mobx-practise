import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class Counter extends React.Component {
  static propTypes = {
    store: PropTypes.shape({
      count: PropTypes.number.isRequired,
      increment: PropTypes.func.isRequired,
      decrement: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleIncrement = () => {
    const { store } = this.props;
    store.increment();
  };

  handleDecrement = () => {
    const { store } = this.props;
    store.decrement();
  };

  render() {
    const { store } = this.props;
    return (
      <div className="Counter">
        <h1>{store.count}</h1>
        <button type="button" onClick={this.handleDecrement}>
          -1
        </button>
        <button type="button" onClick={this.handleIncrement}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
