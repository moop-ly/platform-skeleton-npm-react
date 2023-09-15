import { ApiResource } from "../utils/types";

export interface PhotoAvatar extends ApiResource {
  network?: string;
  states?: string[];
  status?: string;
  dtCreated?: string;
  dtUpdated?: string;
  contentFlags?: string;
  networkPermissions?: string;
  groupPermissions?: string;
  userPermissions?: string;
  minViewingAge?: number;
  site?: string;
  creator?: string;
  group?: string;
  type?: string;
  template?: string;
  media?: string;
  storage?: string;
  width?: number;
  height?: number;
  contentUrl?: string;
  size?: string;
  mimeType?: string;
  timeToEncode?: number;
  humanFileSize?: string;
  sourceFileUrl?: string;
  humanStatus?: string;
}
