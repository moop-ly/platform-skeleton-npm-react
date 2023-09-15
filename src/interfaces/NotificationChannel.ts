import { ApiResource } from "../utils/types";

export interface NotificationChannel extends ApiResource {
  network?: string;
  site?: string;
  smtpConfig?: string;
  snsConfig?: string;
}
