type FormErrorProps = {
  error: string | undefined;
};

const FormError = ({ error }: FormErrorProps) => {
  if (!error) {
    return null;
  }

  return <div className="is-error-text">{error}</div>;
};

export default FormError;
