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
        name="mountId"
        placeholder="A unique identifier given to this storage device."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="password"
        placeholder="The password passed in for authentication."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="port"
        placeholder="The port the host is listening on."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="ssl"
        placeholder="Does the FTP host listen for TLS connections?"
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="host"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="username"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="timeout"
        placeholder=""
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="pathPrefix"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="visibility"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="publicUrls"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="asWorm"
        placeholder=""
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="rootPath"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="uriPrefix"
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
        name="storage"
        placeholder="The Storage reference for this item."
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
