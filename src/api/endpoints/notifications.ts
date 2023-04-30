import { Notification } from "../../hooks/useNotifications";
import { api } from "../rtk-api";

export const notificationsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query<Notification[], void>({
      query: () => `/notifications`,
    }),

    markAsRead: builder.mutation<void, void>({
      query: () => ({
        url: `/notifications/mark-all-as-read`,
        method: "PUT",
      }),
    }),

    markAsUnread: builder.mutation<void, void>({
      query: () => ({
        url: `/notifications/mark-all-as-unread`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useMarkAsReadMutation,
  useMarkAsUnreadMutation,
  useLazyGetNotificationsQuery,
} = notificationsApi;
