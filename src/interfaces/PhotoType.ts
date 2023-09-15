import { ApiResource } from "../utils/types";

export interface PhotoType extends ApiResource {
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
  avatarFiles?: string[];
  humanDefaultStatus?: string;
}
