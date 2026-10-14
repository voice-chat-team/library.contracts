export const FilePurpose = {
  UNSPECIFIED: 0,
  MESSAGE_ATTACHMENT: 1,
  USER_AVATAR: 2,
  GUILD_ICON: 3,
} as const;

export const FileStatus = {
  UNSPECIFIED: 0,
  PENDING: 1,
  READY: 2,
  DELETED: 3,
} as const;
