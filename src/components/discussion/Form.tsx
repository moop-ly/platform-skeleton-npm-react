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
      comments: normalizeLinks(data["comments"]),
      states: normalizeLinks(data["states"]),
      textVersions: normalizeLinks(data["textVersions"]),
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
        name="type"
        placeholder="Optional. Create logical groups of Discussions and apply Type level settings to them."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="anchor"
        placeholder="A unique string used to associate a discussion with a url or another piece of content (iri)."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="pinned"
        placeholder=""
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="attachment"
        placeholder=""
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
        name="comments"
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
        name="textVersions"
        placeholder="Current and historical versions of this content's text fields."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="publish"
        placeholder="Whether or not to publish this content to the activity feed and other notification channels."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="spamCheck"
        placeholder="Whether or not to run the text fields through spam search."
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="stripTags"
        placeholder="Whether or not strip tags from the submitted text fields."
        type="checkbox"
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
        name="status"
        placeholder=""
        type="text"
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
        name="votePos"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="voteNeg"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="voteTotal"
        placeholder=""
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="numViews"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="numComments"
        placeholder=""
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="humanStatus"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="humanContentFlags"
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

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
