import { ApiResource } from "../utils/types";

export interface Relationship extends ApiResource {
  network?: string;
  actor?: string;
  victim?: string;
  state?: string;
  networkPermissions?: string;
  groupPermissions?: string;
  userPermissions?: string;
  dtCreated?: string;
  dtUpdated?: string;
  humanState?: string;
  humanDirection?: string;
}
