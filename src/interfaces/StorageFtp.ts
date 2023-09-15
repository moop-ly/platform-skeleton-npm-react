import { ApiResource } from "../utils/types";

export interface StorageFtp extends ApiResource {
  mountId?: string;
  password?: string;
  port?: number;
  ssl?: boolean;
  host?: string;
  username?: string;
  timeout?: number;
  pathPrefix?: string;
  visibility?: string;
  publicUrls?: any;
  asWorm?: boolean;
  rootPath?: string;
  uriPrefix?: string;
  network?: string;
  storage?: string;
}
