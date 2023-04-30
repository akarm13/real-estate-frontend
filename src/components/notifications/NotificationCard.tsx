import { AlertCircle, CheckCircle, Star, XCircle } from "lucide-react";
import { Notification } from "../../hooks/useNotifications";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
dayjs.extend(relativeTime);

type Props = Notification & {
  className?: string;
};
export const NotificationCard = ({
  message,
  type,
  user,
  createdAt,
  listing,
}: Props) => {
  const notificationContent = <>{extractAndStyleMessageParts(message)}</>;

  const userAvatar = user && (
    <img
      src={user.avatar}
      alt={user.fullName}
      className="w-8 h-8 object-cover mr-4 rounded-full"
    />
  );

  const systemType = type === "systemWideAnnouncement";

  const timestamp = (
    <div className="text-sm text-gray-500">{dayjs(createdAt).fromNow()}</div>
  );

  if (systemType) {
    return (
      <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg">
        <div className="flex items-center justify-center w-8 h-8 mr-4">
          <AlertCircle className="w-8 h-8 text-blue-400" />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex-1">{notificationContent}</div>
          {timestamp}
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to={`/listings/${listing?._id}`}
        className="flex items-center p-4 hover:bg-gray-50 rounded-lg"
      >
        {userAvatar}
        <div className="flex flex-col gap-y-2">
          <div className="flex-1">{notificationContent}</div>
          {timestamp}
        </div>
      </Link>
    );
  }
};

const extractAndStyleMessageParts = (message: string) => {
  const parts = message.split(/\{\{|\}\}/).filter((part) => part);

  return (
    <span>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <span className="font-semibold text-gray-900">{part}</span>
          ) : (
            part
          )}
        </React.Fragment>
      ))}
    </span>
  );
};
