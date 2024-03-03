import clsx from "clsx";

interface FormControlProps {
  id: string;
  type: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  required?: boolean;
  className?: string;
}
const FormControl = ({
  id,
  type,
  onChange,
  value,
  name,
  placeholder,
  className,
}: FormControlProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={clsx(className, `form-control`)}
      id={id}
    />
  );
};

export default FormControl;
