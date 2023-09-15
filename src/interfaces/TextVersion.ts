import { ApiResource } from "../utils/types";

export interface TextVersion extends ApiResource {
  network?: string;
  creator?: string;
  article?: string;
  discussion?: string;
  comment?: string;
  document?: string;
  photo?: string;
  video?: string;
  audio?: string;
  externalContent?: string;
  hashTags?: string[];
  isDefault?: boolean;
  active?: boolean;
  dtCreated?: string;
  locale?: string;
  title?: string;
  description?: string;
  body?: string;
  checkedForSpam?: boolean;
  spamFound?: boolean;
  checkedForTriggerWords?: boolean;
  replacedTriggerWords?: any;
  content?: any;
}
