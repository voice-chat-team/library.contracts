/**
 * Права ролей гильдии — битовая маска.
 * Номер бита права менять нельзя (он хранится в БД), новые права — только в конец.
 */
export const Permission = {
  MANAGE_GUILD: 1 << 0,
  MANAGE_ROLES: 1 << 1,
  INVITE_MEMBERS: 1 << 2,
  KICK_MEMBERS: 1 << 3,
  SEND_MESSAGES: 1 << 4,
  ATTACH_FILES: 1 << 5,
  DELETE_MESSAGES: 1 << 6,
  VOICE_CONNECT: 1 << 7,
  VOICE_SPEAK: 1 << 8,
  VOICE_MUTE_MEMBERS: 1 << 9,
  CREATE_BOARDS: 1 << 10,
  DELETE_BOARDS: 1 << 11,
} as const;

export type PermissionKey = keyof typeof Permission;

export const PERMISSION_KEYS = Object.keys(Permission) as PermissionKey[];

export const ALL_PERMISSIONS = PERMISSION_KEYS.reduce(
  (mask, key) => mask | Permission[key],
  0,
);

/** Права @everyone в новой гильдии и при миграции существующих. */
export const DEFAULT_EVERYONE_PERMISSIONS =
  Permission.SEND_MESSAGES |
  Permission.ATTACH_FILES |
  Permission.VOICE_CONNECT |
  Permission.VOICE_SPEAK |
  Permission.CREATE_BOARDS;

export const hasPermission = (mask: number, permission: number): boolean =>
  (mask & permission) === permission;

export const permissionsToKeys = (mask: number): PermissionKey[] =>
  PERMISSION_KEYS.filter((key) => hasPermission(mask, Permission[key]));

export const keysToPermissions = (keys: readonly PermissionKey[]): number =>
  keys.reduce((mask, key) => mask | Permission[key], 0);

/** Отбрасывает неизвестные биты (например, пришедшие от клиента). */
export const sanitizePermissions = (mask: number): number =>
  mask & ALL_PERMISSIONS;
