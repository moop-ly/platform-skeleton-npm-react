import { ApiResource } from "../utils/types";

export interface NotificationSns extends ApiResource {
  network?: string;
  channel?: string;
}
