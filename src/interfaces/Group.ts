import { ApiResource } from "../utils/types";

export interface Group extends ApiResource {
  network?: string;
  owner?: string;
  subdir?: string;
  displayName?: string;
  dtCreated?: string;
  meta?: any;
  timezone?: string;
  site?: string;
  avatarUrls?: any;
}
