import { ApiResource } from "../utils/types";

export interface PhotoTemplate extends ApiResource {
  network?: string;
  type?: string;
  storage?: string;
  required?: boolean;
  extension?: string;
  width?: number;
  height?: number;
  quality?: number;
  name?: string;
  refName?: string;
  dtCreated?: string;
  dtUpdated?: string;
}
