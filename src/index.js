import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

const Index = () => {
  return <App />;
};

ReactDOM.render(<Index />, document.querySelector('#root'));
