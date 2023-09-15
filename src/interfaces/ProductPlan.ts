import { ApiResource } from "../utils/types";

export interface ProductPlan extends ApiResource {
  name?: string;
  products?: string[];
  networks?: string[];
}
