type FormErrorProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: string | any;
};

const FormError = ({ error }: FormErrorProps) => {
  if (!error) {
    return null;
  }

  return <div className="is-error-text">{error}</div>;
};

export default FormError;
