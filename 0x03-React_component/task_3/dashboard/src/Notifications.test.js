// task_2/dashboard/src/Notifications/Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('mock console.log', () => {
  const spy = jest.spyOn(console, 'log');
  render(<Notifications notifications={[]} />);
  // Your test assertions for the spy
  spy.mockRestore();
});

// Add other tests for Notifications component as needed

