// task_2/dashboard/src/Notifications/Notifications.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('renders NotificationItem elements', () => {
  const notifications = [
    { type: 'default', value: 'test1' },
    { type: 'success', value: 'test2' },
  ];

  const { getAllByTestId } = render(<Notifications notifications={notifications} />);
  const notificationItems = getAllByTestId('notification-item');

  expect(notificationItems).toHaveLength(2);
});

test('first NotificationItem element renders the right html', () => {
  const notifications = [{ type: 'default', value: 'test1' }];

  const { getByTestId } = render(<Notifications notifications={notifications} />);
  const firstNotificationItem = getByTestId('notification-item');

  expect(firstNotificationItem).toHaveAttribute('data-notification-type', 'default');
  expect(firstNotificationItem).toHaveTextContent('test1');
});

