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
          template: initialValues["template"]?.["@id"] ?? "",
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
      mediaFiles: normalizeLinks(data["mediaFiles"]),
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        register={register}
        name="type"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="template"
        placeholder="The Template grouping this definition belongs to."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="frequency"
        placeholder="Extract a thumbnail every X seconds. You cannot use time and frequency together."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="time"
        placeholder="Extract a thumbnail at the provided time (in seconds). You cannot use time and frequency together."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="extension"
        placeholder="The extracted files will be formatted into the specified extension."
        type="text"
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
        name="mediaFiles"
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

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
