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
      hashTags: normalizeLinks(data["hashTags"]),
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
        name="creator"
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
        name="document"
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
        name="externalContent"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="hashTags"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="isDefault"
        placeholder=""
        type="checkbox"
        required
        errors={errors}
      />
      <Field
        register={register}
        name="active"
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
        name="checkedForSpam"
        placeholder=""
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="spamFound"
        placeholder=""
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="checkedForTriggerWords"
        placeholder=""
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="replacedTriggerWords"
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
