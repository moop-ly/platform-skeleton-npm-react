import { ApiResource } from "../utils/types";

export interface Template extends ApiResource {
  type?: string;
  locale?: string;
  title?: string;
  description?: string;
  body?: string;
  network?: string;
  notifications?: string[];
  dtCreated?: string;
}
