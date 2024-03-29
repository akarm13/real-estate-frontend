import { Bell, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  useLazyGetNotificationsQuery,
  useMarkAsReadMutation,
} from "../../api/endpoints/notifications";
import { Notification, useNotifications } from "../../hooks/useNotifications";
import { selectAuth } from "../../store/slices/auth";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tabs";
import { NotificationCard } from "./NotificationCard";
import { toast } from "react-hot-toast";

export const Notifications = () => {
  const auth = useSelector(selectAuth);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { notifications: liveNotifications } = useNotifications(auth.token);
  const [isOpen, setIsOpen] = useState(false);

  const [getNotifications, { data: notificationsData }] =
    useLazyGetNotificationsQuery();

  const [markAllAsRead] = useMarkAsReadMutation();

  const markAsRead = async () => {
    await markAllAsRead()
      .unwrap()
      .catch((err) => console.error(err));

    const apiNotifications = await getNotifications().unwrap();
    setNotifications(apiNotifications);
  };

  useMemo(() => {
    setNotifications(liveNotifications);
  }, [liveNotifications]);

  const unreadNotifications = useMemo(() => {
    return notifications.filter((notification) => !notification.read);
  }, [notifications]);

  const renderNotifications = useMemo(() => {
    return (
      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
        </TabsList>
        <TabsContent
          value="all"
          className="gap-y-4 mt-4 max-h-[350px] overflow-y-scroll"
        >
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationCard
                key={notification._id}
                {...notification}
                className="p-4"
              />
            ))
          ) : (
            <div className="text-center text-gray-600 mt-8">
              You have no notifications
            </div>
          )}
        </TabsContent>
        <TabsContent
          value="unread"
          className="flex flex-col gap-y-4 mt-4 max-h-[350px] overflow-y-scroll"
        >
          {unreadNotifications.length > 0 ? (
            unreadNotifications.map((notification) => (
              <NotificationCard
                key={notification._id}
                {...notification}
                className="p-4"
              />
            ))
          ) : (
            <div className="text-center text-gray-600 mt-8">
              You have no unread notifications
            </div>
          )}
        </TabsContent>
      </Tabs>
    );
  }, [notifications]);

  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger>
          <div
            className="flex items-center gap-x-4 relative"
            onClick={markAsRead}
          >
            {unreadNotifications.length > 0 && (
              <div className="absolute -top-2 left-4 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">
                  {unreadNotifications.length}
                </span>
              </div>
            )}
            <Bell className="stroke-gray-700" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="bg-white w-96 border-2 border-primary-background">
          {renderNotifications}
        </PopoverContent>
      </Popover>
    </div>
  );
};
