import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = ({ notifications }) => {
  return (
    <ul>
      {notifications.map((notification, index) => (
        <NotificationItem
          key={index}
          type={notification.type}
          html={notification.html}
          value={notification.value}
        />
      ))}
    </ul>
  );
};

export default Notifications;
