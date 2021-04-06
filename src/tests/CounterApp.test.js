import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../../src/components/CounterApp';

describe('Counter App Tests', () => {
  test('should display CounterApp properly', () => {
    const wrapper = shallow(<CounterApp title='React Counter App' value={0} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show subtitle from props', () => {
    const subtitle = 'Subtitle from props';
    const wrapper = shallow(
      <CounterApp title='React Counter App' value={0} subtitle={subtitle} />
    );
    const text = wrapper.find('h2').text();
    expect(text).toBe(subtitle);
  });

  test('should show initial count value from props', () => {
    const initialValue = 10;
    const wrapper = shallow(
      <CounterApp title='React Counter App' value={initialValue} />
    );
    const text = wrapper.find('p').text();
    expect(text).toBe(`Count: ${initialValue}`);
  });
});
