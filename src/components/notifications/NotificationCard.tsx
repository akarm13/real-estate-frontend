import { AlertCircle, CheckCircle, Star, XCircle } from "lucide-react";
import { Notification } from "../../hooks/useNotifications";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type Props = Notification & {
  className?: string;
};

export const NotificationCard = ({
  title,
  message,
  type,
  listing,
  createdAt,
  className,
}: Props) => {
  const notificationContent = (
    <>
      <p className="text-sm font-medium text-gray-900">{title}</p>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
    </>
  );

  const listingImage = listing && (
    <img
      src={listing.images[0]}
      alt={listing.title}
      className="w-16 h-16 object-cover mr-4 rounded"
    />
  );

  const listingType =
    listing &&
    (type === "listingNewFavorite" ||
      type === "listingPriceChange" ||
      type === "listingStatusChange");

  const systemType = type === "systemWideAnnouncement";

  const timestamp = (
    <div className="text-sm text-gray-500">{dayjs(createdAt).fromNow()}</div>
  );

  if (listingType) {
    return (
      <Link
        to={`/listings/${listing._id}`}
        className={`hover:bg-primary-50 rounded-md ${className} flex flex-col gap-y-2`}
      >
        <div className="flex items-start">
          {listingImage}
          <div className="flex-1">{notificationContent}</div>
        </div>
        {timestamp}
      </Link>
    );
  } else if (systemType) {
    return (
      <div
        className={`hover:bg-primary-50 rounded-md cursor-pointer ${className} flex flex-col gap-y-2`}
      >
        <div className="flex items-center">
          <div className="flex items-center justify-center w-16 h-16 bg-transparent mr-4">
            <AlertCircle className="w-8 h-8 text-blue-400" />
          </div>
          <div className="flex-1">{notificationContent}</div>
        </div>
        {timestamp}
      </div>
    );
  } else {
    return (
      <div>
        {notificationContent}
        {timestamp}
      </div>
    );
  }
};
