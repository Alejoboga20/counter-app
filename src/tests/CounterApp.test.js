import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../../src/components/CounterApp';

describe('Counter App Tests', () => {
  test('should display CounterApp properly', () => {
    const wrapper = shallow(<CounterApp title='React Counter App' value={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
