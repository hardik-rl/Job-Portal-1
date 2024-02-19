import { Navigate } from "react-router-dom";
import { getToken } from "../helpers/utils";
import { JSX } from "react/jsx-runtime";

const withAuthenticationRequired = (ComposedComponent: () => JSX.Element) => {
  const Component: React.FC = (props) => {
    if (getToken()) {
      return <ComposedComponent {...props} />;
    }
    return <Navigate to={"/admin/login"} />;
  };
  return <Component />;
};

export default withAuthenticationRequired;
