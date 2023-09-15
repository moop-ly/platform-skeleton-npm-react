import { ApiResource } from "../utils/types";

export interface ProfileMeta extends ApiResource {
  user?: string;
  group?: string;
  key?: string;
  value?: string;
}
