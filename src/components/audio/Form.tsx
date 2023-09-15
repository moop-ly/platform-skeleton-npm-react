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
      categories: normalizeLinks(data["categories"]),
      states: normalizeLinks(data["states"]),
      attachments: normalizeLinks(data["attachments"]),
      textVersions: normalizeLinks(data["textVersions"]),
      coverPhotos: normalizeLinks(data["coverPhotos"]),
      mediaFiles: normalizeLinks(data["mediaFiles"]),
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        register={register}
        name="network"
        placeholder="The organization that encapsulates all Site, User, Group, and their content."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="site"
        placeholder="Optional. Will default to the Network's Site."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="creator"
        placeholder="Optional. Required only if using a devkey for access, or if you need to change the creator."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="categories"
        placeholder="Used to group objects by defined categories."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="type"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="states"
        placeholder="References to how this object will look in the future."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="attachments"
        placeholder="The attachments the audio belongs to."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="textVersions"
        placeholder="Current and historical versions of this content's text fields."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="storage"
        placeholder="Optional. The Storage location for this item."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="coverPhotos"
        placeholder="Photos associated with this item."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="saveSourceFile"
        placeholder="By saving original file uploads you have the ability to re-encode media at a later date if you choose to add/modify Templates or assign a different Type to this MediaObject."
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="publish"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="status"
        placeholder=""
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
      <Field
        register={register}
        name="contentFlags"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="networkPermissions"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="groupPermissions"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="userPermissions"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="minViewingAge"
        placeholder=""
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="mediaFiles"
        placeholder="The encoded media files generated by the AudioTemplates belonging to this object's Type."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="duration"
        placeholder="Length of the stream in seconds."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="meta"
        placeholder="Encoding details about the file."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="contentUrls"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="embedUrl"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="thumbnailUrl"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="locale"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="title"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="description"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="body"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="activeTextVersions"
        placeholder="The TextVersions that are marked active for this piece of content."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="contentUrl"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="size"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="mimeType"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="timeToEncode"
        placeholder=""
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="humanFileSize"
        placeholder="The filesize a human readable format."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="sourceFileUrl"
        placeholder="The URL to the originally uploaded file - available after it has been scanned for malware."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="humanStatus"
        placeholder=""
        type="text"
        errors={errors}
      />

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
