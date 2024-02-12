// task_2/dashboard/src/Notifications/NotificationItem.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  handleClick = () => {
    const { notification, markAsRead } = this.props;
    markAsRead(notification.id);
  };

  render() {
    const { notification } = this.props;
    return (
      <li onClick={this.handleClick}>
        {notification.message}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;

