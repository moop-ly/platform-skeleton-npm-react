import { ApiResource } from "../utils/types";

export interface UserGroup extends ApiResource {
  network?: string;
  user?: string;
  group?: string;
  rank?: any;
  networkPermissions?: string;
  groupPermissions?: string;
  userPermissions?: string;
  dtCreated?: string;
  dtUpdated?: string;
}
