import { ApiResource } from "../utils/types";

export interface FutureState extends ApiResource {
  creator?: string;
  dtCreated?: string;
  dtExecute?: string;
  state?: any;
  site?: string;
  discussion?: string;
  article?: string;
  comment?: string;
  photo?: string;
  avatar?: string;
  photoFile?: string;
  document?: string;
  video?: string;
  audio?: string;
  relationship?: string;
  content?: any;
}
