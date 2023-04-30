import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { io, Socket } from "socket.io-client";
import { Listing } from "../types/listing";
import { User } from "../types/auth";
import { NotificationCard } from "../components/notifications/NotificationCard";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

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
      toast.custom(
        (t) => (
          <Link
            to={
              newNotification.listing
                ? `/listings/${newNotification.listing?._id}`
                : ""
            }
            className={`${
              t.visible
                ? "animate-in duration-250 fade-in"
                : "animate-out duration-250 fade-out"
            } min-w-[280px] max-w-[500px] flex items-center bg-white rounded-lg shadow-sm hover:bg-primary-50 border border-primary-background`}
          >
            <NotificationCard {...newNotification} className="flex-1 p-4" />

            <button
              className="text-center text-sm text-gray-600 hover:text-gray-800 ml-4 pr-4"
              onClick={() => toast.remove(t.id)}
            >
              <X size={20} />
            </button>
          </Link>
        ),
        {
          position: "top-right",
          duration: 10000,
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
