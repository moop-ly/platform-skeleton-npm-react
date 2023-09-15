import { ApiResource } from "../utils/types";

export interface Storage extends ApiResource {
  network?: string;
  mountId?: string;
  s3Config?: string;
  ftpConfig?: string;
  ftpsConfig?: string;
  localConfig?: string;
  sourceFiles?: string[];
  documentTemplates?: string[];
  documents?: string[];
  documentFiles?: string[];
  audio?: string[];
  audioFiles?: string[];
  photos?: string[];
  photoFiles?: string[];
  avatarFiles?: string[];
  videoFiles?: string[];
}
