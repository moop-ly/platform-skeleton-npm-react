import { ApiResource } from "../utils/types";

export interface AttachedPhoto extends ApiResource {
  id?: string;
  media?: string;
  attachment?: string;
  order?: number;
  textVersions?: string[];
}
