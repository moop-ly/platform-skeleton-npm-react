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
        name="site"
        placeholder="Optional. A null value indicates this is the default for the network."
        type="text"
        errors={errors}
      />
      <Field
        register={register}
        name="autoLockNumWeeks"
        placeholder="Automatically lock Discussions after this many weeks pass since it was created."
        type="number"
        errors={errors}
      />
      <Field
        register={register}
        name="stripTags"
        placeholder="Determines if the Discussions and their DiscussionComments allow markup in their text fields."
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="checkSpam"
        placeholder="Check the Discussion and the DiscussionComments for spam."
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="triggerWords"
        placeholder="Check the Discussion and the DiscussionComments for TriggerWords and automatically replace them."
        type="checkbox"
        errors={errors}
      />
      <Field
        register={register}
        name="publish"
        placeholder="Whether or not to publish this content to the activity feed and other notification channels."
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
      <Field
        register={register}
        name="network"
        placeholder="The organization that encapsulates all Site, User, Group, and their content."
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
