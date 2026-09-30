export const USER_EVENTS_EXCHANGE = "user.events";
export const USER_EVENT_ROUTING_KEY = {
  CREATED: "user.created",
  UPDATED: "user.updated",
} as const;

export type UserEventRoutingKey =
  (typeof USER_EVENT_ROUTING_KEY)[keyof typeof USER_EVENT_ROUTING_KEY];

export type UserProfileEvent = {
  userId: string;
  username: string;
  avatarUrl: string | null;
  version: number;
  occurredAt: string;
};
