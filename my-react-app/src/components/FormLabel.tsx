interface FormLabelProps {
  name: string;
  htmlFor: string;
}
const FormLabel = ({ name, htmlFor }: FormLabelProps) => {
  return <label className="mb-1" htmlFor={htmlFor}>{name}</label>;
};

export default FormLabel;
