import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters at minimum")
    .required("Password is required"),
});

interface IRegister {
  email: string;
  password: string;
}

function Register() {
  const initialValues: IRegister = { email: "", password: "" };

  const register = async (values: IRegister) => {
    await axios.post("http://localhost:8081/users", {
      email: values.email,
      password: values.password,
    });
  };

  return (
    <>
      <div>
        <h1>Register Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            register(values);
          }}
        >
          {(props: FormikProps<IRegister>) => {
            const { values, errors, touched, handleChange } = props;
            return (
              <Form>
                <div>
                  <label htmlFor="email">Email :</label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password">Password :</label>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  ) : null}
                </div>
                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default Register;
