import { ApiResource } from "../utils/types";

export interface Webhook extends ApiResource {
  network?: string;
  event?: string;
  endpoint?: string;
}
