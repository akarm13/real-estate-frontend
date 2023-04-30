import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { io, Socket } from "socket.io-client";

type Notification = {
  _id: string;
  user: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  listing?: string;
  createdAt: Date;
  updatedAt: Date;
};

enum NotificationType {
  SYSTEM_WIDE_ANNOUCEMENT = "systemWideAnnouncement",
  LISTING_PRICE_CHANGE = "listingPriceChange",
  LISTING_STATUS_CHANGE = "listingStatusChange",
  LISTING_NEW_FAVORITE = "listingNewFavorite",
}
const apiUrl = import.meta.env.VITE_API_URL;

export const useNotifications = (authToken: string | null) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (authToken === null) {
      return;
    }

    const newSocket = io(`${apiUrl}/notifications`, {
      query: { token: authToken },
      transports: ["websocket"],
    });
    setSocket(newSocket);

    newSocket.on("notifications", (initialNotifications: Notification[]) => {
      setNotifications(initialNotifications);
    });

    newSocket.on("notification", (newNotification: Notification) => {
      toast.success(newNotification.message);
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [authToken]);

  return notifications;
};
