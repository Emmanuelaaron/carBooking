import React from "react";
import PropTypes from "prop-types";

const Notification = (props) => {
  const { id, message } = props.notification;
  const { closeNotification } = props;

  return (
    <div className="notification-container">
      <p className="mb-0 me-3 message">{message}</p>
      <button
        className="btn btn-outline-danger m-0 closebtn"
        onClick={() => closeNotification(id)}
      >
        X
      </button>
    </div>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string
  }),
  closeNotification: PropTypes.func
};

export default Notification;
