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
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        register={register}
        name="media"
        placeholder="The Video media object."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="textVersions"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="order"
        placeholder=""
        type="number"
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
        name="contentUrl"
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
