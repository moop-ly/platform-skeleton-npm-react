import { ApiResource } from "../utils/types";

export interface AttachedTextVersion extends ApiResource {
  isDefault?: boolean;
  active?: boolean;
  locale?: string;
  title?: string;
  description?: string;
  body?: string;
  creator?: string;
}
