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
      textVersions: normalizeLinks(data["textVersions"]),
      attachments: normalizeLinks(data["attachments"]),
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        register={register}
        name="network"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="site"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="creator"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="url"
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
        name="autoTldr"
        placeholder=""
        type="checkbox"
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
        name="data"
        placeholder="The OpenGraph data."
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
        name="thumbnail"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="attachments"
        placeholder="The attachments the photo belongs to."
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
