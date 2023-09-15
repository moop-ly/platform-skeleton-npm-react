import { ApiResource } from "../utils/types";

export interface Article extends ApiResource {
  network?: string;
  site?: string;
  creator?: string;
  type?: string;
  attachment?: string;
  categories?: string[];
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
  humanStatus?: string;
  humanContentFlags?: string;
  activeTextVersions?: any;
}
