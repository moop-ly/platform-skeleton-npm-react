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
          documents:
            initialValues["documents"]?.map((emb: any) => emb["@id"]) ?? [],
          photos: initialValues["photos"]?.map((emb: any) => emb["@id"]) ?? [],
          audio: initialValues["audio"]?.map((emb: any) => emb["@id"]) ?? [],
          videos: initialValues["videos"]?.map((emb: any) => emb["@id"]) ?? [],
          externalContent:
            initialValues["externalContent"]?.map((emb: any) => emb["@id"]) ??
            [],
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
      documents: normalizeLinks(data["documents"]),
      photos: normalizeLinks(data["photos"]),
      audio: normalizeLinks(data["audio"]),
      videos: normalizeLinks(data["videos"]),
      externalContent: normalizeLinks(data["externalContent"]),
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        register={register}
        name="documents"
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
        name="audio"
        placeholder=""
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="videos"
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

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
