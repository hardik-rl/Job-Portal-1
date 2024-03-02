import clsx from "clsx";

interface FormControlProps {
  id: string;
  type: string;
  name: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number;
}
const FormControl = ({
  id,
  type,
  onChange,
  value,
  name,
  className,
}: FormControlProps) => {
  return (
    <input
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
