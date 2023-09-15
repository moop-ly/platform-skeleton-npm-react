import { ApiResource } from "../utils/types";

export interface ArticleType extends ApiResource {
  network?: string;
  site?: string;
  publish?: string;
  title?: string;
  contentFlags?: string;
  status?: string;
  dtCreated?: string;
  dtUpdated?: string;
  content?: string[];
}
