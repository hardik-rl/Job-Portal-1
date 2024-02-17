import FormControl from "../../shared/FormControl";
import Footer from "../../shared/Footer";

import logo from "../../../assets/img/admin/grp-logo.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { loginSchema } from "./validation";
import { LoginFormProps } from "./types";
import { signin } from "./api";

const Login = () => {
  const { mutate: loginFn } = useMutation(
    (data: LoginFormProps) => signin(data),
    {
      onSuccess: () => {
        console.log("login success");
      },
      onError: () => {
        console.log("login err");
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: LoginFormProps) => {
      loginFn(values);
    },
    validationSchema: loginSchema,
  });
  return (
    <div className="row g-0 app-auth-wrapper">
      <div className="col-12 auth-main-col text-center p-5">
        <div className="d-flex flex-column align-content-end">
          <div className="app-auth-body mx-auto">
            <div className="app-auth-branding mb-4">
              <Link className="app-logo" to="#0">
                <img className="logo-icon me-2" src={logo} alt="logo" />
              </Link>
            </div>
            <h2 className="auth-heading text-center mb-5">Log in to Portal</h2>
            <div className="auth-form-container text-start">
              <form
                className="auth-form login-form"
                onSubmit={formik.handleSubmit}
              >
                <div className="email mb-3">
                  <FormControl
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    id="signin-email"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="password mb-3">
                  <FormControl
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    id="signin-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div className="extra mt-3 row justify-content-between">
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="RememberPassword"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="RememberPassword"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="forgot-password text-end">
                        <Link to="#0">Forgot password?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn app-btn-primary w-100 theme-btn mx-auto"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
