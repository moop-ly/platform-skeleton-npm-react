import { ApiResource } from "../utils/types";

export interface VideoTemplate extends ApiResource {
  type?: string;
  parent?: string;
  subTemplates?: any;
  storage?: string;
  width?: number;
  height?: number;
  videoBitrate?: string;
  maxRate?: string;
  bufferSize?: string;
  fps?: number;
  audioBitrate?: string;
  audioSampleRate?: number;
  preset?: string;
  tune?: string;
  profile?: string;
  level?: number;
  clipStart?: number;
  clipStop?: number;
  segmentLength?: number;
  name?: string;
  refName?: string;
  network?: string;
  videoThumbnailTemplates?: any;
  audioCodec?: string;
  videoCodec?: string;
  pixelFormat?: string;
  format?: string;
  segmentType?: string;
  extension?: string;
  dtCreated?: string;
  dtUpdated?: string;
}
