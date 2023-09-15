import { ApiResource } from "../utils/types";

export interface Activity extends ApiResource {
  network: string;
  site: string;
  user: string;
  victim?: string;
  group?: string;
  dtCreated?: string;
  xref?: string;
  action?: string;
  discussion?: string;
}
