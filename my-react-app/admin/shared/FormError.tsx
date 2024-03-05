type FormErrorProps = {
  error: string | undefined | any;
};

const FormError = ({ error }: FormErrorProps) => {
  if (!error) {
    return null;
  }

  return <div className="is-error-text">{error}</div>;
};

export default FormError;
