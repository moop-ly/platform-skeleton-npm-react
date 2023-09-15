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
        name="addressCountry"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="addressLocality"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="addressRegion"
        placeholder=""
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
        name="postOfficeBoxNumber"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="postalCode"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="streetAddress"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="isPrimary"
        placeholder=""
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="site"
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
