import { ApiResource } from "../utils/types";

export interface AttachedAudio extends ApiResource {
  id?: string;
  media?: string;
  attachment?: string;
  order?: number;
  textVersions?: string[];
}
