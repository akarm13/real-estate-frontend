import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { io, Socket } from "socket.io-client";
import { Listing } from "../types/listing";
import { User } from "../types/auth";
import { NotificationCard } from "../components/notifications/NotificationCard";

export type Notification = {
  _id: string;
  user: User;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  listing?: Listing;
  createdAt: Date;
  updatedAt: Date;
};

type NotificationType =
  | "systemWideAnnouncement"
  | "listingPriceChange"
  | "listingStatusChange"
  | "listingNewFavorite";

const apiUrl = import.meta.env.VITE_API_URL;

export const useNotifications = (authToken: string | null) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (authToken === null && authToken === undefined) {
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
      toast(
        (t) => (
          <div className="w-96">
            <NotificationCard {...newNotification} />
          </div>
        ),
        {
          position: "top-right",
        }
      );
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [authToken]);

  return {
    notifications,
  };
};
