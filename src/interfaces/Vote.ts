import { ApiResource } from "../utils/types";

export interface Vote extends ApiResource {
  creator?: string;
  xref?: string;
  dir?: number;
  dtCreated?: string;
  dtUpdated?: string;
}
