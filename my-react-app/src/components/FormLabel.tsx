interface FormLabelProps {
  name: string;
  htmlFor: string;
}
const FormLabel = ({ name, htmlFor }: FormLabelProps) => {
  return <label htmlFor={htmlFor}>{name}</label>;
};

export default FormLabel;
