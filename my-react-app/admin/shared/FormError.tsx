type FormErrorProps = {
  error: string | undefined;
};

const FormError = ({ error }: FormErrorProps) => {
  if (!error) {
    return null;
  }

  return <div className="text-red-600 text-xs font-medium mt-1">{error}</div>;
};

export default FormError;
