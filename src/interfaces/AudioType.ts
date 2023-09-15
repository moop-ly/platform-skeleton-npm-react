import { ApiResource } from "../utils/types";

export interface AudioType extends ApiResource {
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
  humanDefaultStatus?: string;
}
