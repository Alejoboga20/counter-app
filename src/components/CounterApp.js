import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ title, subtitle, value }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>Count: {value}</p>
    </>
  );
};

CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
  subtitle: 'First App using React JS'
};
export default CounterApp;
