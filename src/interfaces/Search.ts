import { ApiResource } from "../utils/types";

export interface Search extends ApiResource {
  id?: number;
  indexes?: string;
  query?: string;
}
