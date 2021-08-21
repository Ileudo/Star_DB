import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => {
  return (
    <div className="row mb-2">
      <div className="col md-6">{left}</div>
      <div className="col md-6">{right}</div>
    </div>
  );
};

// PropTypes.node — любой компонент/тип данных, который способен отрендерить JSX.
Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Row;
