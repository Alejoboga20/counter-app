import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired
};

App.defaultProps = {
  subtitle: 'First App using React JS'
};
export default App;
