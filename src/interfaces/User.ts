import { ApiResource } from "../utils/types";

export interface User extends ApiResource {
  plainPassword?: string;
  network?: string;
  username?: string;
  roles?: any;
  email?: string;
  telephone?: string;
  dateOfBirth?: string;
  subdir?: string;
  displayName?: string;
  dtCreated?: string;
  meta?: any;
  timezone?: string;
  site?: string;
  karma?: string;
  loyaltyPoints?: string;
  avatarUrls?: any;
}
