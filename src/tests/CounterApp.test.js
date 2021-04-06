import React from 'react';
import { render } from '@testing-library/react';
import CounterApp from '../../src/components/CounterApp';

describe('Counter App Tests', () => {
  test('should display React Counter App as title', () => {
    const title = 'React Counter App';
    const { getByText } = render(<CounterApp title={title} value={0} />);
    expect(getByText(title)).toBeInTheDocument();
  });
});
