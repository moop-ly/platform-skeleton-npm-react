import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Field from "../Field";
import { normalizeLinks } from "../../utils/dataAccess";
import TResource from "./type";
import { SubmissionError, TError } from "../../utils/types";

interface FormProps {
  onSubmit: (item: Partial<TResource>) => any;
  initialValues?: Partial<TResource>;
  error?: TError;
  reset: () => void;
}

const Form = ({ onSubmit, error, reset, initialValues }: FormProps) => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<TResource>({
    defaultValues: initialValues
      ? {
          ...initialValues,
          subTemplates:
            initialValues["subTemplates"]?.map((emb: any) => emb["@id"]) ?? [],
          videoThumbnailTemplates:
            initialValues["videoThumbnailTemplates"]?.map(
              (emb: any) => emb["@id"]
            ) ?? [],
        }
      : undefined,
  });

  useEffect(() => {
    if (error instanceof SubmissionError) {
      Object.keys(error.errors).forEach((errorPath) => {
        if (errors[errorPath as keyof TResource]) {
          return;
        }
        setError(errorPath as keyof TResource, {
          type: "server",
          message: error.errors[errorPath],
        });
      });

      reset();
    }
  }, [error, errors, reset, setError]);

  const onFormSubmit: SubmitHandler<TResource> = (data) => {
    onSubmit({
      ...data,
      subTemplates: normalizeLinks(data["subTemplates"]),
      videoThumbnailTemplates: normalizeLinks(data["videoThumbnailTemplates"]),
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        register={register}
        name="type"
        placeholder="The Type grouping this template belongs to."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="parent"
        placeholder="The parent of this template when creating an MPEG-DASH encoding. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="subTemplates"
        placeholder="The sub-templates of an encoding when creating an MPEG-DASH encoding. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="storage"
        placeholder="A reference to a storage IRI. If none is provided we will provision storage for you at 3x our cost."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="width"
        placeholder="Specify the width in pixels. Alternatively leave blank to inherit the originally uploaded file dimensions. Changing this value will trigger a re-render of all associated MediaFiles."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="height"
        placeholder="Specify the height in pixels. Alternatively leave blank to inherit the originally uploaded file dimensions. Changing this value will trigger a re-render of all associated MediaFiles."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="videoBitrate"
        placeholder="Specify the video bitrate. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="maxRate"
        placeholder="Specify the max rate. Typically between 1x - 2x of your total bitrate. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="bufferSize"
        placeholder="Specify the buffer size. Lower values mean a more consistent bitrate. Typically about 1/2 of your maxrate. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="fps"
        placeholder="The target frames per second. Changing this value will trigger a re-render of all associated MediaFiles."
        type="number"
        step="0.1"
        errors={errors}
      />
      <Field
        register={register}
        name="audioBitrate"
        placeholder="Specify the audio bitrate. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="audioSampleRate"
        placeholder="Specify the audio sample rate. Changing this value will trigger a re-render of all associated MediaFiles."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="preset"
        placeholder="The predefined encoding preset to use. The slower an encoding the smaller the resulting file and faster encoding finishes. In MPEG-DASH scenarios - the parent value is the one used. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="tune"
        placeholder="For example, if your input is animation then use the animation tuning, or if you want to preserve grain in a film then use the grain tuning. If you are unsure of what to use or your input does not match any of tunings then leave this blank. This setting is not used in sub-templates. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="profile"
        placeholder="The profile used to encode. Typically high or main unless targeting a older devices or desire longer battery life for mobile devices."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="level"
        placeholder="Used in conjunction with profile to ensure maximum device compatibility."
        type="number"
        step="0.1"
        errors={errors}
      />
      <Field
        register={register}
        name="clipStart"
        placeholder="Generate a snippet of the video. Value is in seconds. You must provide a clipStop value. Changing this value will trigger a re-render of all associated MediaFiles."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="clipStop"
        placeholder="Generate a snippet of the video. Value is in seconds. You must provide a clipStart value. Changing this value will trigger a re-render of all associated MediaFiles."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="segmentLength"
        placeholder="The length each DASH snippet should be. Value is in seconds. Changing this value will trigger a re-render of all associated MediaFiles."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="name"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="refName"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="network"
        placeholder="The organization that encapsulates all Site, User, Group, and their content."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="videoThumbnailTemplates"
        placeholder="The video thumbnail templates associated with this template."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="audioCodec"
        placeholder="The audio codec to use. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="videoCodec"
        placeholder="The video codec to use. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="pixelFormat"
        placeholder="The pixel format. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="format"
        placeholder="The output format. Will be dependant on the extension that you use."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="segmentType"
        placeholder="Used in MPEG-Dash flows to determine the filetype of the segmented files."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="extension"
        placeholder="The encoded file extension. Ignored for MPEG-DASH templates. Changing this value will trigger a re-render of all associated MediaFiles."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="dtCreated"
        placeholder=""
        type="dateTime"
        errors={errors}
      />
      <Field
        register={register}
        name="dtUpdated"
        placeholder=""
        type="dateTime"
        errors={errors}
      />

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
