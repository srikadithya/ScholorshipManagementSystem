import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password too short')
    .required('Required'),
});

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          // Implement login logic here
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Email: </label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label>Password: </label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
