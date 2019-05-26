import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Row from './Row';

@observer
class Table extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <td>Name:</td>
            <td>SP:</td>
          </tr>
        </thead>
        <tbody>
          {store.devsList.map(dev => (
            <Row key={dev.name} data={dev} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Team SP:</td>
            <td>{store.totalSum}</td>
          </tr>
          <tr>
            <td>
            Top Performer:
            </td>
            <td>{store.topPerformer ? store.topPerformer.name : ''}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

Table.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Table;
