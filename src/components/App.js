import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>First App</p>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired
};
export default App;
