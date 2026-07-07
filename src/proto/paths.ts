import { join } from "path";

export const PROTO_PATHS = {
  AUTH: join(__dirname, "../../proto/auth.proto"),
  USER: join(__dirname, "../../proto/user.proto"),
  GUILDS: join(__dirname, "../../proto/guilds.proto"),
  INVITATION: join(__dirname, "../../proto/invitation.proto"),
} as const;
