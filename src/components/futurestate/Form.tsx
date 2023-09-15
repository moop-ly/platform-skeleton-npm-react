import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Field from "../Field";

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
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        register={register}
        name="creator"
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
        name="dtExecute"
        placeholder=""
        type="dateTime"
        errors={errors}
      />
      <Field
        register={register}
        name="state"
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
        name="discussion"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="article"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="comment"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="photo"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="avatar"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="photoFile"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="document"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="video"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="audio"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="relationship"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="content"
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
