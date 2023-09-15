import { ApiResource } from "../utils/types";

export interface Network extends ApiResource {
  domain?: string;
  displayName?: string;
  status?: string;
  storage?: string;
  timezone?: string;
  avatarUrls?: any;
  site?: string;
  humanStatus?: string;
}
