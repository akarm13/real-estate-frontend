import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/slices/auth";
import { useNotifications } from "../../hooks/useNotifications";

const NotificationComponent = () => {
  const auth = useSelector(selectAuth);
  const notifications = useNotifications(auth.token);

  return (
    <div className="absolute w-96 h-96 bg-white border top-1/2 left-1/2">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification.title}: {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;
