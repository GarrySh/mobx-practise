import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { action } from 'mobx';

@observer
class UserNickName extends React.Component {
  static propTypes = {
    store: PropTypes.shape({
      age: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      increment: PropTypes.func.isRequired,
      decrement: PropTypes.func.isRequired,
    }).isRequired,
  };

  @action
  handleIncrement = () => {
    const { store } = this.props;
    store.increment();
  };

  @action
  handleDecrement = () => {
    const { store } = this.props;
    store.decrement();
  };

  render() {
    const { store } = this.props;
    return (
      <div className="Counter">
        <h1>{store.age}</h1>
        <p>{store.nickName}</p>
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

export default UserNickName;
