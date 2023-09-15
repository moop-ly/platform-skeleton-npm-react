import { ApiResource } from "../utils/types";

export interface Devkey extends ApiResource {
  network?: string;
  token?: string;
  dtCreated?: string;
  dtExpires?: string;
  totalHits?: string;
}
