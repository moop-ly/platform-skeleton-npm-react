import { ApiResource } from "../utils/types";

export interface HashTag extends ApiResource {
  network?: string;
  site?: string;
  creator?: string;
  textVersion?: string;
  attachedTextVersion?: string;
  dtCreated?: string;
  tag?: string;
}
