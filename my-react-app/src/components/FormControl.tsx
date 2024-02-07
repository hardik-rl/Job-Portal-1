interface FormControlProps {
  id: string;
  type: string;
}
const FormControl = ({ id, type }: FormControlProps) => {
  return <input type={type} className="form-control" id={id} />;
};

export default FormControl;
