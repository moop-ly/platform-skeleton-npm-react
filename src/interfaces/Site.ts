import { ApiResource } from "../utils/types";

export interface Site extends ApiResource {
  privacyFlags?: string;
  networkPermissions?: string;
  groupPermissions?: string;
  userPermissions?: string;
  status?: string;
  displayName?: string;
  storage?: string;
  categories?: string[];
  network?: string;
  group?: string;
  owner?: string;
  subdir?: string;
  timezone?: string;
  dtCreated?: string;
  tiers?: string[];
  avatarUrls?: any;
}
