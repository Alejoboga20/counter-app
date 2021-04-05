import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
import './styles/index.css';

const Index = () => {
  return <CounterApp title='React Counter App' value={123} />;
};

ReactDOM.render(<Index />, document.querySelector('#root'));
