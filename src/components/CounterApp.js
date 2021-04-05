import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ title, subtitle, value = 0 }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);

  const handleSubstract = () => setCount(count - 1);

  const handleReset = () => setCount(value);

  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
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
