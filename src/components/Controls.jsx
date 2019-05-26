import React from 'react';
import PropTypes from 'prop-types';

class Controls extends React.Component {
  static propTypes = {
    store: PropTypes.shape({
      clearList: PropTypes.func.isRequired,
      addDeveloper: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleAddDeveloper = () => {
    const { store } = this.props;
    const name = prompt('Enter the name:');
    const sp = parseInt(prompt('The story points:'), 10);
    store.addDeveloper({ name, sp });
  };

  handleClearList = () => {
    const { store } = this.props;
    store.clearList();
  };

  render() {
    return (
      <div className="controls">
        <button type="button" onClick={this.handleClearList}>
          Clear table
        </button>
        <button type="button" onClick={this.handleAddDeveloper}>
          Add record
        </button>
      </div>
    );
  }
}

export default Controls;
