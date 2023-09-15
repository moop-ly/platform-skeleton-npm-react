import { ApiResource } from "../utils/types";

export interface StorageLocal extends ApiResource {
  network?: string;
  storage?: string;
  mountId?: string;
  pathPrefix?: string;
  visibility?: string;
  publicUrls?: any;
  asWorm?: boolean;
  rootPath?: string;
  uriPrefix?: string;
}
