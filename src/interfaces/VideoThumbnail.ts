import { ApiResource } from "../utils/types";

export interface VideoThumbnail extends ApiResource {
  site?: string;
  media?: string;
  type?: string;
  minViewingAge?: number;
  status?: string;
  dtCreated?: string;
  dtUpdated?: string;
  contentFlags?: string;
  networkPermissions?: string;
  groupPermissions?: string;
  userPermissions?: string;
  network?: string;
  mediaFile?: string;
  template?: string;
  timestamp?: string;
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
