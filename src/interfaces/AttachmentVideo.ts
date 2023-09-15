import { ApiResource } from "../utils/types";

export interface AttachmentVideo extends ApiResource {
  media?: string;
  textVersions?: string[];
  order?: number;
  locale?: string;
  title?: string;
  description?: string;
  body?: string;
  contentUrl?: string;
}
