import { ApiResource } from "../utils/types";

export interface VideoType extends ApiResource {
  site?: string;
  name?: string;
  refName?: string;
  contentFlags?: string;
  status?: string;
  saveSourceFile?: boolean;
  publish?: number;
  storage?: string;
  network?: string;
  templates?: string[];
  mediaObjects?: string[];
  mediaFiles?: string[];
  thumbnailTemplates?: string[];
  thumbnails?: string[];
  humanDefaultStatus?: string;
}
