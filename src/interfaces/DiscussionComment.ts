import { ApiResource } from "../utils/types";

export interface DiscussionComment extends ApiResource {
  creator?: string;
  discussion?: string;
  parent?: string;
  pinned?: number;
  attachment?: string;
  states?: string[];
  textVersions?: string[];
  publish?: string;
  spamCheck?: boolean;
  stripTags?: boolean;
  networkPermissions?: string;
  groupPermissions?: string;
  userPermissions?: string;
  status?: string;
  contentFlags?: string;
  dtCreated?: string;
  dtUpdated?: string;
  network?: string;
  site?: string;
  children?: string[];
  votePos?: string;
  voteNeg?: string;
  voteTotal?: number;
  humanStatus?: string;
  humanContentFlags?: string;
  activeTextVersions?: any;
}
