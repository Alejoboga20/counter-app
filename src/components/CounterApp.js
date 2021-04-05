import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ title, subtitle, value }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstrac = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>Count: {count}</p>
      <div>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubstrac}>-</button>
      </div>
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
