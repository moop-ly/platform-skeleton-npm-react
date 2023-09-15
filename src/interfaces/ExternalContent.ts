import { ApiResource } from "../utils/types";

export interface ExternalContent extends ApiResource {
  network?: string;
  site?: string;
  creator?: string;
  url?: string;
  status?: string;
  autoTldr?: boolean;
  dtCreated?: string;
  data?: any;
  textVersions?: string[];
  thumbnail?: string;
  attachments?: string[];
  activeTextVersions?: any;
}
