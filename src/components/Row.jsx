import React from 'react';
import PropTypes from 'prop-types';

const Row = props => {
  const {
    data: { name, sp },
  } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{sp}</td>
    </tr>
  );
};

Row.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    sp: PropTypes.number,
  }).isRequired,
};

export default Row;
