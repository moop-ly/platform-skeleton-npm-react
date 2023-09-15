import { ApiResource } from "../utils/types";

export interface TemplateType extends ApiResource {
  network?: string;
  site?: string;
  name?: string;
  templates?: string[];
}
