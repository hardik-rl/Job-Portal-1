import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../helpers/utils";


const withoutAuthentication = (ComposedComponent: () => JSX.Element) => {
  const Component: React.FC = (props) => {
    if (getToken()) {
      return <Navigate to={"/"} />;
    }
    return <ComposedComponent {...props} />;
  };
  return <Component />;
};

export default withoutAuthentication;
