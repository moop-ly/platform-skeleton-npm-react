import { ApiResource } from "../utils/types";

export interface AudioTemplate extends ApiResource {
  type?: string;
  parent?: string;
  subTemplates?: any;
  storage?: string;
  extension?: string;
  maxRate?: string;
  bufferSize?: string;
  audioBitrate?: string;
  audioSampleRate?: number;
  clipStart?: number;
  clipStop?: number;
  segmentLength?: number;
  name?: string;
  refName?: string;
  network?: string;
  audioCodec?: string;
  format?: string;
  segmentType?: string;
  dtCreated?: string;
  dtUpdated?: string;
}
