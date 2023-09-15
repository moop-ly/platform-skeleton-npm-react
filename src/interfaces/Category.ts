import { ApiResource } from "../utils/types";

export interface Category extends ApiResource {
  network?: string;
  title?: string;
  parent?: string;
  children?: string[];
}
