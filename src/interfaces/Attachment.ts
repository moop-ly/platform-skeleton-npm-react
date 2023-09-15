import { ApiResource } from "../utils/types";

export interface Attachment extends ApiResource {
  documents?: any;
  photos?: any;
  audio?: any;
  videos?: any;
  externalContent?: any;
}
