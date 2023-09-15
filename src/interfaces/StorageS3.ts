import { ApiResource } from "../utils/types";

export interface StorageS3 extends ApiResource {
  mountId?: string;
  authorization?: any;
  region?: string;
  version?: string;
  bucketName?: string;
  pathPrefix?: string;
  visibility?: string;
  publicUrls?: any;
  asWorm?: boolean;
  rootPath?: string;
  uriPrefix?: string;
  network?: string;
  storage?: string;
}
