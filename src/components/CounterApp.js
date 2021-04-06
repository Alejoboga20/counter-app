import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ title, subtitle, value = 0 }) => {
  const [count, setCount] = useState(value);

  const handleAdd = () => setCount(count + 1);

  const handleSubstract = () => setCount(count - 1);

  const handleReset = () => setCount(0);

  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubstract}>-</button>
        <button onClick={handleReset}>Reset Count</button>
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
