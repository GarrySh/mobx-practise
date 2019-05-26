import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Table = props => {
  const { store } = props;
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
    </table>
  );
};

Table.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Table;
