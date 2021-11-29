import React from "react";
import PropTypes from "prop-types";
import './notifications.css';
import Notification from './Notification'

const NotificationContainer = (props) => {
  const { notifications, closeNotification } = props;
  return (
    <div className="notifications-container">
      {
        notifications.map((notification) => (
          <Notification key={notification.id} notification={notification} closeNotification={closeNotification} />
        )) 
      }
    </div>
  );
};

NotificationContainer.propTypes = {
  addNotification: PropTypes.array,
  closeNotification: PropTypes.func
};

export default NotificationContainer;