import { ApiResource } from "../utils/types";

export interface SourceFile extends ApiResource {
  status?: string;
  dtCreated?: string;
  dtUpdated?: string;
  contentFlags?: string;
  networkPermissions?: string;
  groupPermissions?: string;
  userPermissions?: string;
  minViewingAge?: number;
  contentUrl?: string;
  size?: string;
  mimeType?: string;
  timeToEncode?: number;
  humanFileSize?: string;
  sourceFileUrl?: string;
  humanStatus?: string;
}
