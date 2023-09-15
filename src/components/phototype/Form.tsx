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
      templates: normalizeLinks(data["templates"]),
      mediaObjects: normalizeLinks(data["mediaObjects"]),
      mediaFiles: normalizeLinks(data["mediaFiles"]),
      avatarFiles: normalizeLinks(data["avatarFiles"]),
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
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
        name="contentFlags"
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
        name="saveSourceFile"
        placeholder=""
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="publish"
        placeholder=""
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="storage"
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
        name="templates"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="mediaObjects"
        placeholder=""
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
        name="avatarFiles"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="humanDefaultStatus"
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
