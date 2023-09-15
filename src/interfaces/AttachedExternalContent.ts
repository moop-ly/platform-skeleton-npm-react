import { ApiResource } from "../utils/types";

export interface AttachedExternalContent extends ApiResource {
  media?: string;
  textVersions?: string[];
  order?: number;
  locale?: string;
  title?: string;
  description?: string;
  body?: string;
  contentUrl?: string;
}
