import { ApiResource } from "../utils/types";

export interface StorageFtps extends ApiResource {
  mountId?: string;
  password?: string;
  port?: number;
  privateKey?: string;
  privateKeyPassphrase?: string;
  hostFingerprint?: string;
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
