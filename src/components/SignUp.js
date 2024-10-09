import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './SignUp.css';
const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password too short')
    .required('Required'),
});

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
          // You can implement signup logic here
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

            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
