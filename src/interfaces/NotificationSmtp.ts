import { ApiResource } from "../utils/types";

export interface NotificationSmtp extends ApiResource {
  network?: string;
  channel?: string;
}
