import { ApiResource } from "../utils/types";

export interface DocumentTemplate extends ApiResource {
  type?: string;
  storage?: string;
  name?: string;
  refName?: string;
  network?: string;
  dtCreated?: string;
  dtUpdated?: string;
}
