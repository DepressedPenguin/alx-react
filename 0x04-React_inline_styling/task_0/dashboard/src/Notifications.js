// task_2/dashboard/src/Notifications/Notifications.js
import React, { Component } from 'react';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    // Your existing render logic
    return (
      <div>
        {this.props.notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            markAsRead={this.markAsRead}
          />
        ))}
      </div>
    );
  }
}

export default Notifications;

