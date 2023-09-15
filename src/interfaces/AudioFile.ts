import { ApiResource } from "../utils/types";

export interface AudioFile extends ApiResource {
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
  duration?: number;
  progress?: string;
  meta?: any;
  contentUrl?: string;
  size?: string;
  mimeType?: string;
  timeToEncode?: number;
  humanFileSize?: string;
  sourceFileUrl?: string;
  humanStatus?: string;
}
