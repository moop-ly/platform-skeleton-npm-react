import { ApiResource } from "../utils/types";

export interface Tier extends ApiResource {
  network?: string;
  name?: string;
  priority?: number;
  sites?: string[];
}
