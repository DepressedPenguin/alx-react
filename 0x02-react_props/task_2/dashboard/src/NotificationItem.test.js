import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('renders without crashing', () => {
  render(<NotificationItem />);
});

test('renders correct html with dummy type and value props', () => {
  const { getByTestId } = render(<NotificationItem type="default" value="test" />);
  const liElement = getByTestId('notification-item');
  expect(liElement).toHaveAttribute('data-notification-type', 'default');
  expect(liElement).toHaveTextContent('test');
});

test('renders correct html with dummy html prop', () => {
  const { getByTestId } = render(
    <NotificationItem html={{ __html: '<u>test</u>' }} />
  );
  const liElement = getByTestId('notification-item');
  expect(liElement).toHaveAttribute('data-notification-type', undefined);
  expect(liElement).toHaveTextContent('test');
});
