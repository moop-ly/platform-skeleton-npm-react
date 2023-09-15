import { ApiResource } from "../utils/types";

export interface Option extends ApiResource {
  site?: string;
  name?: string;
  value?: string;
  dtCreated?: string;
  dtUpdated?: string;
}
