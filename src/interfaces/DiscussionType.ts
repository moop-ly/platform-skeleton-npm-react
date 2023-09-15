import { ApiResource } from "../utils/types";

export interface DiscussionType extends ApiResource {
  site?: string;
  autoLockNumWeeks?: number;
  stripTags?: boolean;
  checkSpam?: boolean;
  triggerWords?: boolean;
  publish?: string;
  title?: string;
  contentFlags?: string;
  status?: string;
  dtCreated?: string;
  dtUpdated?: string;
  network?: string;
}
