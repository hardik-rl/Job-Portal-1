interface FormControlProps {
  id: string;
  type: string;
  name: string;
  onChange: any;
  value: string | number;
}
const FormControl = ({ id, type, onChange, value, name }: FormControlProps) => {
  return <input type={type} name={name} value={value} onChange={onChange} className="form-control" id={id} required/>;
};

export default FormControl;
