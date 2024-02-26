interface FormControlProps {
  id: string;
  type: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  required?: boolean;
}
const FormControl = ({
  id,
  type,
  onChange,
  value,
  name,
  placeholder,
  required=true
}: FormControlProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
      id={id}
      required={required}
    />
  );
};

export default FormControl;
