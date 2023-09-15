import { ApiResource } from "../utils/types";

export interface Bookmark extends ApiResource {
  network?: string;
  site?: string;
  creator?: string;
  networkPermissions?: string;
  groupPermissions?: string;
  userPermissions?: string;
  dtCreated?: string;
  categories?: string[];
  article?: string;
  discussion?: string;
  comment?: string;
  xref?: string;
}
