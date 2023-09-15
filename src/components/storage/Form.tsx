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
      sourceFiles: normalizeLinks(data["sourceFiles"]),
      documentTemplates: normalizeLinks(data["documentTemplates"]),
      documents: normalizeLinks(data["documents"]),
      documentFiles: normalizeLinks(data["documentFiles"]),
      audio: normalizeLinks(data["audio"]),
      audioFiles: normalizeLinks(data["audioFiles"]),
      photos: normalizeLinks(data["photos"]),
      photoFiles: normalizeLinks(data["photoFiles"]),
      avatarFiles: normalizeLinks(data["avatarFiles"]),
      videoFiles: normalizeLinks(data["videoFiles"]),
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
        name="mountId"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="s3Config"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="ftpConfig"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="ftpsConfig"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="localConfig"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="sourceFiles"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="documentTemplates"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="documents"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="documentFiles"
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
        name="audioFiles"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="photos"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="photoFiles"
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
        name="videoFiles"
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
