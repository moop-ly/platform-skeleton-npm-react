import { ApiResource } from "../utils/types";

export interface VideoThumbnailTemplate extends ApiResource {
  type?: string;
  template?: any;
  frequency?: number;
  time?: number;
  extension?: string;
  name?: string;
  refName?: string;
  network?: string;
  mediaFiles?: string[];
  dtCreated?: string;
  dtUpdated?: string;
}
