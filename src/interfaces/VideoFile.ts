import { ApiResource } from "../utils/types";

export interface VideoFile extends ApiResource {
  status?: string;
  dtCreated?: string;
  dtUpdated?: string;
  contentFlags?: string;
  networkPermissions?: string;
  groupPermissions?: string;
  userPermissions?: string;
  minViewingAge?: number;
  network?: string;
  site?: string;
  creator?: string;
  type?: string;
  template?: string;
  media?: string;
  storage?: string;
  thumbnails?: string[];
  duration?: number;
  meta?: any;
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
