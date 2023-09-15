import { ApiResource } from "../utils/types";

export interface Discussion extends ApiResource {
  network?: string;
  site?: string;
  creator?: string;
  type?: string;
  anchor?: string;
  pinned?: number;
  attachment?: string;
  categories?: string[];
  comments?: string[];
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
  votePos?: string;
  voteNeg?: string;
  voteTotal?: number;
  numViews?: string;
  numComments?: number;
  humanStatus?: string;
  humanContentFlags?: string;
  activeTextVersions?: any;
}
