import { ApiResource } from "../utils/types";

export interface Like extends ApiResource {
  creator?: string;
  dtCreated?: string;
  dtUpdated?: string;
  rating?: number;
  article?: string;
  discussion?: string;
  comment?: string;
  network?: string;
  xref?: string;
}
