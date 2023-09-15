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
        name="networkPermissions"
        placeholder="Optional. Only used if you enable advanced permissions filters. Provided values should taken from the permissions calculator in the admin panel."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="groupPermissions"
        placeholder="Optional. Only used if you enable advanced permissions filters. Provided values should taken from the permissions calculator in the admin panel."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="userPermissions"
        placeholder="Optional. Only used if you enable advanced permissions filters. Provided values should taken from the permissions calculator in the admin panel."
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
        name="categories"
        placeholder="Used to group objects by defined categories."
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
        name="discussion"
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
        name="xref"
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
